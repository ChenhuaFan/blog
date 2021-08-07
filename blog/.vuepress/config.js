module.exports = {
  locales: {
    '/': {
      lang: 'English',
      title: 'Chenhua Fan',
      description: 'Chenhua Fan\'s Blog',
    },
    '/zh/': {
      lang: '中文',
      title: '范宸华',
      description: '范宸华的博客',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        nav: [
          { text: 'Home', link: '/' },
          // { text: 'Tags', link: '/tag/' },
          { text: 'All', link: '/posts/' },
          { text: 'About me', link: 'https://chenhua.fan' }
        ],
      },
      '/zh/': {
        nav: [
          { text: '主页', link: '/zh/' },
          // { text: '标签', link: '/zh/tag/' },
          { text: '全部文章', link: '/zh/posts/' },
          { text: '关于我', link: 'https://chenhua.fan' }
        ]
      },
    },
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: '全部',
            dirname: 'zh/_posts',
            path: '/zh/posts/',
            itemPermalink: '/posts/:year/:month/:day/:slug',
            pagination: {
              lengthPerPage: 7,
            },
          },
          {
            id: 'Posts',
            dirname: '_posts',
            path: '/posts/',
            itemPermalink: '/posts/:year/:month/:day/:slug',
            pagination: {
              lengthPerPage: 7,
            },
          },
        ],
        frontmatters: [
          {
            // Unique ID of current classification
            id: '标签',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['tags'],
            // Path of the `entry page` (or `list page`)
            path: '/zh/tag/',
            dirname: '_posts',
          },
          {
            id: 'Tags',
            keys: ['tags'],
            path: '/tag/',
            dirname: 'zh/_posts',
          },
        ],
      },
    ],
    // [
    //   'vuepress-plugin-comment',
    //   {
    //     choosen: 'valine',
    //     // options选项中的所有参数，会传给Valine的配置
    //     options: {
    //       el: '#valine-vuepress-comment',
    //       appId: 'EcuPqXNBftNip6muXf6FBPSS-gzGzoHsz',
    //       appKey: 'cNuUvmvFjHzamSUX2mTPTtru'
    //     },
    //     container: '#comment-container'
    //   }
    // ]
  ],
}