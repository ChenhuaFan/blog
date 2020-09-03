module.exports = {
  title: '范宸华的博客',
  description: '范宸华的博客',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '标签', link: '/tag/' },
      { text: '全部文章', link: '/post/' },
      {
        text: '语言 / Languages',
        items: [
          { text: '中文', link: '/language/chinese' },
          { text: 'English', link: '/language/english' }
        ]
      },
      { text: '关于我', link: 'https://chenhua.fan' }
    ]
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
            id: 'post',
            dirname: '_posts',
            path: '/post/',
            itemPermalink: '/post/:year/:month/:day/:slug',
            pagination: {
              lengthPerPage: 10,
            },
          },
        ],
        frontmatters: [
          {
            // Unique ID of current classification
            id: 'tag',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['tags'],
            // Path of the `entry page` (or `list page`)
            path: '/tag/'
          },
        ],
      },
    ],
  ],
}