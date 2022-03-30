const Config = require('./setting');
const path = require("path");

// cdn预加载使用
const externals = {
  // 'vue': 'Vue',
	// 'vuex': 'Vuex',
  // 'vue-router': 'VueRouter',
  // 'vue-cookie': 'Cookies',
  // 'axios': 'axios',
  // 'prismjs': 'Prism',
  // 'ali-oss': 'OSS',
  'vuedraggable': 'vuedraggable',
  // '@kangc/v-md-editor': 'VMdEditor',
  // '@kangc/v-md-editor/lib/preview': 'VMdPreview',
  '@kangc/v-md-editor/lib/theme/vuepress': 'VMdTheme',
  'mapbox-gl': 'mapboxgl',
  // 'gsap': 'exports',
};
const cdn = {
  css: [
    'https://cdn.jsdelivr.net/npm/@kangc/v-md-editor@2.3.14/lib/style/base-editor.css',
    'https://cdn.jsdelivr.net/npm/@kangc/v-md-editor@2.3.14/lib/style/preview.css',
    'https://cdn.jsdelivr.net/npm/@kangc/v-md-editor@2.3.14/lib/theme/style/vuepress.css'
  ],
	js: [
    // 'https://cdn.jsdelivr.net/npm/vue@3.2.20/dist/vue.global.min.js',
    // 'https://cdn.jsdelivr.net/npm/vuex@4.0.2/dist/vuex.global.min.js',
    // 'https://cdn.jsdelivr.net/npm/vue-router@4.0.12/dist/vue-router.global.min.js',
    // 'https://cdn.jsdelivr.net/npm/vue-cookies@1.7.4/vue-cookies.min.js',
		// 'https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js',
    // 'https://cdn.jsdelivr.net/npm/prismjs@1.24.1/prism.min.js',
    // 'https://cdn.jsdelivr.net/npm/ali-oss@6.16.0/lib/client.min.js',
    'https://cdn.jsdelivr.net/npm/vuedraggable@2.24.3/dist/vuedraggable.umd.min.js',
    // 'https://cdn.jsdelivr.net/npm/@kangc/v-md-editor@2.3.14/lib/base-editor.js',
    // 'https://cdn.jsdelivr.net/npm/@kangc/v-md-editor@2.3.14/lib/preview.js',
    'https://cdn.jsdelivr.net/npm/@kangc/v-md-editor@2.3.14/lib/theme/vuepress.js',
    'https://cdn.jsdelivr.net/npm/mapbox-gl@2.4.1/dist/mapbox-gl.min.js',
    // 'https://cdn.jsdelivr.net/npm/gsap@3.9.1/dist/gsap.min.js',
	]
};

//引入插件
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
//匹配此 {RegExp} 的资源
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/index.scss";`
      }
    }
  },
  configureWebpack: config => {
      const plugins = [];
      // start 生成 gzip 压缩文件
      plugins.push(
          new CompressionWebpackPlugin({
              filename: "[path].gz[query]",  // 目标资源名称
              algorithm: "gzip",
              test: productionGzipExtensions,  // 处理所有匹配此 {RegExp} 的资源
              threshold: 10240,  // 只处理比这个值大的资源。按字节计算(楼主设置10K以上进行压缩)
              minRatio: 0.8  // 只有压缩率比这个值小的资源才会被处理
          })
      );
      plugins.push(new BundleAnalyzerPlugin());
      // End 生成 gzip 压缩文件
      if (process.env.NODE_ENV === 'production') config.plugins = [...config.plugins, ...plugins];
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = Config.title
      return args
    });
    config.entry('app')
      .clear()
      .add('./src/main.js');
    // 通过externals加载外部CDN资源
    config.set('externals', externals);
    config.plugin('html').tap(args => {
      args[0].cdn = cdn
      return args
    });
    config.set('optimization', {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true
            }
          }
        }),
        new CssMinimizerPlugin({
          parallel: 4,
        }),
      ],
    });
    // 配置svg加载规则
    config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
    config.module.rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(path.join(__dirname, 'src/assets/svgs')) //处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      });
  }
}