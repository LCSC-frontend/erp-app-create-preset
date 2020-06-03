module.exports = [
  {
    name: 'project-name',
    message: '请输入项目名',
    required: true,
    default: 'lcsc-erp-ics',
  },
  {
    name: 'routesPrefix',
    message: '请输入项目名前缀',
    required: true,
    default: '/ics',
  },
  {
    name: 'devHost',
    message: '开发环境host',
    default: 'deverpics.szlcsc.com',
  },
  {
    name: 'devPort',
    message: '开发环境port',
    default: '448',
  },
];
