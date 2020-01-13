module.exports = {
  title: 'PresByter的博客',
  description: 'Blog of PresByter ',
  head: [['link', {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]],
  themeConfig: {
    sidebar: 'auto',
    nav: [
      {text: '资源导航', link: '/resource/', ariaLabel: '资源导航'},
      {text: '博客', link: '/blog/', ariaLabel: 'Nested2'},
      {text: '工具', link: '/tool/'},
      {text: '好文章', link: '/acticle/'},
      {text: '书籍', link: '/book/'},
      {text: 'css特效', link: '/css/'},
      {
        text: 'External',
        ariaLabel: '外联',
        items: [
          {text: '百度', link: 'https://www.baidu.com'},
          {text: 'GitHub', link: 'https://github.com/'},
        ],
      },
    ],
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/nprogress'],
};
