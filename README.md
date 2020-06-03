## erp-app-create-preset
依赖于 vue-cli3 的 预设插件，用于创建erp子项目

## Usage

```bash

# 安装 vue-cli@3.0
npm install -g @vue/cli

# 创建方式
# 1.根据远程 git 仓库创建项目
vue create --preset LCSC-frontend/erp-app-create-preset <project-name>

# 2.下载本地创建
vue create --preset <src> <project-name>

# 根据提示输入指令
... project-name

# 压缩拷贝文件至内网打开项目
添加ssl证书，在vue.config.js中配置https证书信息
```

## Doc
- 已配置了babel、eslint
- 剔除了vuex、vue-router，子项目不需要
- 命令行创建说明
  - project-name  必填，用于修改生成项目 package.json 中的 name
  - routesPrefix  必填，会替换模板文件中的 routesPrefix，填写时与Apollo保持一致
  - devHost 替换开发环境配置，填写时与Apollo保持一致
  - devPort 替换开发环境配置，填写时与Apollo保持一致
