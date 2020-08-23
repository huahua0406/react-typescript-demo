const {
  override,
  addDecoratorsLegacy,
  addBundleVisualizer,
  addWebpackPlugin,
  addWebpackExternals,
  addWebpackAlias,
  overrideDevServer
} = require("customize-cra");


const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin');


const isProduction = process.env.NODE_ENV === 'production';

const analyze = process.env.BUNDLE_VISUALIZE == 1 //是否分析打包数据
const externals = process.env.REACT_APP_EXTERNALS //是否使用cdn
// 关掉 sourceMap
process.env.GENERATE_SOURCEMAP = isProduction ? 'false' : 'true';

const addCustomize = () => (config) => {
    if (process.env.NODE_ENV === 'production') {
        // 关闭sourceMap
        config.devtool = false;
        // 配置打包后的文件位置
        // config.output.path = __dirname + '../dist/demo/';
        // config.output.publicPath = '/demo';
        // 添加js、css打包gzip配置
        config.plugins.push(
            new CompressionWebpackPlugin({
                test: /\.js$|\.css$/,
                threshold: 1024,
            }),
        )
    }

    return config;
};

const devServerConfig = () => config => {
    return {
      ...config,
      // 服务开启gzip
      compress: true,
      proxy: {
        '/api': {
            target: 'https://www.v2ex.com',
            changeOrigin: true,
            pathRewrite: { '^/api': '/' },
        }
      }
    };
};


module.exports = {
    webpack: override(
        // 启用装饰器语法
        addDecoratorsLegacy(),
      
        //是否分析打包数据
        analyze && addBundleVisualizer({analyzerMode: 'static'}),
        // addWebpackPlugin(new HtmlWebpackPlugin({
        //     template: `${__dirname}/public/index.html`, //create-react-app默认创建的html文件路径，且build写死了必须使用此文件，故直接以它作为模板
        //     externals //设置一个externals变量（将会被templateParameters对应的generator传入模板中）
        // })),
        // addWebpackExternals({
        //     'react': 'React',
        //     'react-dom': 'ReactDom',
        // }),
        // 配置路径别名
        addWebpackAlias({
          "@": path.join(__dirname, "src"),
        }),
        // 自定义配置
        // addCustomize()
    ),
    devServer: overrideDevServer(devServerConfig())
}

// 配置：webpack
// https://www.jianshu.com/p/76d0a8392455
// https://juejin.im/post/6859354172127936526
// https://zhuanlan.zhihu.com/p/85839264
// https://blog.csdn.net/qq_37648307/article/details/106456616