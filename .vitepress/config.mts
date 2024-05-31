import { defineConfig } from "vitepress";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/blog/",
  title: "赖创文",
  description: "bug放着放着就能自我修复",
  head: [["link", { rel: "icon", href: "/avatar.jpg" }]],
  themeConfig: {
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: "开源",
        collapsed: false,
        items: [
          {
            text: "k-data-grid",
            link: "/docs/share/k-data-grid.md",
          },
        ],
      },
      {
        text: "随笔",
        collapsed: true,
        items: [
          {
            text: "js",
            collapsed: true,
            items: [
              {
                text: "数据类型",
                link: "/docs/notes/js/数据类型.md",
              },
              {
                text: "对象",
                link: "/docs/notes/js/对象.md",
              },
              {
                text: "函数",
                link: "/docs/notes/js/函数.md",
              },
              {
                text: "理解this",
                link: "/docs/notes/js/理解this.md",
              },
              {
                text: "原型与原型链",
                link: "/docs/notes/js/原型与原型链.md",
              },
            ],
          },
          {
            text: "css",
            collapsed: true,
            items: [
              { text: "水平居中方式", link: "/docs/notes/css/水平居中方式.md" },
              { text: "盒子模型", link: "/docs/notes/css/盒子模型.md" },
            ],
          },
          {
            text: "webpack5",
            collapsed: true,
            items: [
              { text: "基本配置", link: "/docs/notes/webpack5/基本配置.md" },
              { text: "样式处理", link: "/docs/notes/webpack5/样式处理.md" },
              { text: "图片处理", link: "/docs/notes/webpack5/图片处理.md" },
              {
                text: "其他文件处理",
                link: "/docs/notes/webpack5/其他文件处理.md",
              },
              {
                text: "js兼容处理与压缩",
                link: "/docs/notes/webpack5/js兼容处理与压缩.md",
              },
              {
                text: "html压缩",
                link: "/docs/notes/webpack5/html压缩.md",
              },
            ],
          },
          {
            text: "nginx",
            collapsed: true,
            items: [
              { text: "安装", link: "/docs/notes/nginx/安装.md" },
              { text: "日志配置", link: "/docs/notes/nginx/日志配置.md" },
              { text: "开机自启动", link: "/docs/notes/nginx/开机自启动.md" },
            ],
          },
          {
            text: "docker",
            collapsed: true,
            items: [
              { text: "安装", link: "/docs/notes/docker/安装.md" },
              { text: "常用指令", link: "/docs/notes/docker/常用指令.md" },
            ],
          },
          {
            text: "git",
            collapsed: true,
            items: [{ text: "常用指令", link: "/docs/notes/git/常用指令.md" }],
          },
        ],
      },
    ],
    footer: {
      message: "Copyright © 2024-Ewenlai",
      copyright:
        '<a href="https://beian.miit.gov.cn/" target="_blank">桂ICP备2021001630号-1</a>',
    },
    socialLinks: [{ icon: "github", link: "https://github.com/laichuangwen" }],
  },
});
