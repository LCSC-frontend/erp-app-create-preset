module.exports = (api, options, rootOptions) => {

  api.extendPackage({
    name: options['project-name'],
  })

  // 命令
  api.extendPackage({
    scripts: {
      'serve': 'vue-cli-service serve',
      'build': 'vue-cli-service build',
      'lint': 'vue-cli-service lint',
    },
  })
  // 项目依赖
  api.extendPackage({
    dependencies: {
      'element-theme-chalk': '~2.4.11',
      'element-ui': '~2.4.11',
      'font-awesome': '~4.7.0',
      'lodash': '^4.17.11',
      'moment': '^2.24.0',
      'normalize.css': '^8.0.1',
      'vue': '^2.6.6',
      'vue-resource': '^1.5.1',
      'vue-router': '^3.0.1',
      'vuex': '^3.0.1',
    },
    devDependencies: {
      'vue-template-compiler': '^2.6.10',
      'node-sass': '^4.9.0',
      'sass-loader': '^7.1.0',
    },
  })
  
  // postcss
  api.extendPackage({
    postcss: {
      plugins: {
        autoprefixer: {}
      }
    }
  });

  // 删除 vue-cli3 默认目录
  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path]);
  });
  // 用 ejs 渲染 `./template` 内所有的文件
  api.render('../template')
  // 渲染忽略文件
  api.render({
    './.gitignore': '../template/.gitignore',
    './.eslintrc.js': '../template/.eslintrc.js',
  });
};
