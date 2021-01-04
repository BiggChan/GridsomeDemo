// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '拉钩教育',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['projects','journals'],
        singleTypes: ['logo'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: 'cxg',
        //   password: '123456'
        // }
      }
    }
  ],
  templates: {
    StrapiJournals: [ // 数据名称，这里的写法是规范的，不能自定义
      {
        path: '/journal/:id',// 路由标识
        component: './src/templates/Journal.vue'// 组件地址
      }
    ],
    StrapiProjects: [ // 数据名称，这里的写法是规范的，不能自定义
      {
        path: '/project/:id',// 路由标识
        component: './src/templates/Project.vue'// 组件地址
      }
    ]
  }
}
