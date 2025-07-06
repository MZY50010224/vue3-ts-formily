export default [
  {
    name: 'expenses', // 子应用名称，跟package.json一致
    entry: '//localhost:7001', // 子应用入口，本地环境下指定端口
    container: '#sub-container', // 挂载子应用的dom
    activeRule: '/expenses', // 路由匹配规则
    props: {} // 主应用与子应用通信传值
  },
  {
    name: 'accounting', // 子应用名称，跟package.json一致
    entry: '//localhost:7002', // 子应用入口，本地环境下指定端口
    container: '#sub-container', // 挂载子应用的dom
    activeRule: '/accounting', // 路由匹配规则
    props: {} // 主应用与子应用通信传值
  },
]