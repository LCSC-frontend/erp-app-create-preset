const path = require('path');
const fs = require('fs');
const packageName = require('./package.json').name;

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    https: {},
    host: '<%= options.devHost %>',
    port: '<%= options.devPort %>',
    open: false,
    hot: true,
    disableHostCheck: true,
    overlay: {
      warning: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    externals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'element-ui': 'ElementUI',
      'vue-resource': 'VueResource',
      'vue-router': 'VueRouter',
    },
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },
};
