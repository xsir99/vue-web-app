const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}


module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_api', resolve('src/api'))
      .set('_assets', resolve('src/assets'))
      .set('_components', resolve('src/components'))
      .set('_views', resolve('src/views'))
      .set('_common', resolve('src/common'))

    const svgRule = config.module.rule('svg')
    svgRule.exclude.add([resolve('src/components/SvgIcon/svg/')])

    // svgRule.uses.clear()
    // svgRule.use('svg-sprite-loader').loader('svg-sprite-loader')
    config.module
      .rule('svg2')
      .test(/\.(svg)(\?.*)?$/)
      .include
      .add([resolve('src/components/SvgIcon/svg')])
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
}
