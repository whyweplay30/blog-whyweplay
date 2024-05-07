const fs = require("fs");
const path = require("path");

const getNavList = function (filePath) {
  const list = [];
  // 同步读取目录
  const files = fs.readdirSync(filePath);
  files.forEach((file) => {
    const curFilePath = path.join(filePath, file);
    const stats = fs.statSync(curFilePath);
    let item = null;
    if (stats.isFile()) {
      item = {
        text: file.split(".")[0],
        link: filePath.replace("./docs", "") + "/" + file,
      };
    } else {
      item = {
        text: file,
        items: getNavList(filePath + "/" + file),
      };
    }
    list.push(item);
  });
  return list;
};

const navList = [...getNavList("./docs/pages")];

const sidebarLsit = {};
navList.map((item) => {
  if (item.items) {
    const key = "pages/" + item.text;
    sidebarLsit[key] = [
      {
        text: item.text,
        items: item.items,
      },
    ];
  }
});

export default {
  navList,
  sidebarLsit,
};
