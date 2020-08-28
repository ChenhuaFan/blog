module.exports = {
  title: '范宸华的博客',
  description: '范宸华的博客',
  theme: '@vuepress/theme-blog',
  themeConfig: {
    // nav: [
    //   { text: '主页', link: '/' },
    //   { text: '分类', link: '/categories/' },
    //   { text: '标签', link: '/tags/' },
    //   {
    //     text: '语言 / Languages',
    //     items: [
    //       { text: '中文', link: '/language/chinese' },
    //       { text: 'English', link: '/language/english' }
    //     ]
    //   },
    //   { text: '关于我', link: 'https://chenhua.fan' }
    // ]
  },
  markdown: {
    lineNumbers: true
  },
  // plugins: [
  //   [
  //     '@vuepress/blog',
  //     {
  //       directories: [
  //         {
  //           id: 'post',
  //           dirname: '_posts',
  //           path: '/',
  //           pagination: {
  //             lengthPerPage: 10,
  //           },
  //         },
  //       ],
  //     },
  //   ],
  //   [
  //     '@vuepress/active-header-links', {
  //       sidebarLinkSelector: '.sidebar-link',
  //       headerAnchorSelector: '.header-anchor'
  //     }
  //   ],
  //   ['@vuepress/nprogress']
  // ],
}