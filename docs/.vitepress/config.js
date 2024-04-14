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
        link: filePath.replace("./docs", "") + "/"+file,
      };
    } else {
      item = {
        text: file,
        items: getNavList(filePath + "/" + file),
      };
    }
    console.log(JSON.stringify(item));
    list.push(item);
  });
  return list;
};
console.log(getNavList("./docs/pages"));
const navList = [
  
  ...getNavList("./docs/pages"),
];
module.exports = {
  title: "whyweplay",
  base: "./",
  description: "Just playing around.",
  themeConfig: {
    nav: navList,
    sidebar: {
      // "/pages/CSS": [
      //   {
      //     text: "CSS文章目录",
      //     items: [
      //       { text: "盒模型", link: "/pages/CSS/pages/盒模型.md" },
      //       // { text: "JavaScript", link: "/pages/JavaScript" },
      //     ],
      //   },
      //   { text: "CSS", item: [] },
      // ],
    },
  },
};
