// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Bryan Williart',
    siteUrl: 'https://www.bryanwilliart.com',
    titleTemplate: `%s | Bryan Williart`,
    // chainWebpack: config => {
    //   const svgRule = config.module.rule('svg')
    //   svgRule.uses.clear()
    //   svgRule
    //     .use('vue-svg-loader')
    //     .loader('vue-svg-loader')
    // },
    plugins: [
      {
        use: 'gridsome-plugin-tailwindcss',
      },
      // {
      //   use: '@gridsome/source-filesystem',
      //   options: {
      //     path: 'content/Homepage.md',
      //     typeName: 'HomePage',
      //     route: '/'
      //   }
      // },
      {
        use: '@gridsome/source-filesystem',
        options: {
          path: 'content/*.md',
          typeName: 'PageContent',
          route: '/:slug'
        }
      },
      {
        use: '@gridsome/source-filesystem',
        options: {
          path: 'content/portfolio/**/*.md',
          typeName: 'PortfolioSingle',
          route: '/portfolio/:slug',
          refs: {
            category: {
              typeName: 'Category',
              route: '/category/:id',
              create: true
            }
          }
        }
      },
      {
        use: '@gridsome/source-filesystem',
        options: {
          path: 'content/blog/**/*.md',
          typeName: 'BlogPost',
          route: '/blog/:slug',
          refs: {
            tags: {
              typeName: 'Tag',
              route: '/tag/:id',
              create: true
            }
          }
        }
      }
    ],
    transformers: {
      remark: {
        externalLinksRel: ['noopener'],
        externalLinksTarget: '_blank',
      },
    },
    chainWebpack: config => {
      const svgRule = config.module.rule('svg')
      svgRule.uses.clear()
      svgRule
        .use('vue-svg-loader')
        .loader('vue-svg-loader')
    }
}
  