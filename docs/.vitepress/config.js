import config from "./theme/util.js";

module.exports = {
  lastUpdated: true,
  title: "why we play",
  base: "/blog-whyweplay",
  description: "Just playing around.",
  themeConfig: {
    nav: config.navList,
    sidebar: config.sidebarLsit,
    outline: {
      label: "页面导航",
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    footer: {
      message: '个人博客',
      copyright: `2023-${new Date().getFullYear()} why we play`
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },
  
};
