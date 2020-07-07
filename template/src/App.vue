<template>
  <div class="app">
    <router-view v-if="$store.state.loginState" />
  </div>
</template>
<script>
import routes from './router';

export default {
  data() {
    return {
      isInitRoutes: false,
    };
  },
  computed: {
    funcVOList() {
      return this.$store.state.funcVOList;
    },
  },
  watch: {
    funcVOList(newValue) {
      if (newValue && newValue.length && !this.isInitRoutes) {
        this.initRoutes();
      }
    },
  },
  created() {
    this.initRoutes();
  },
  methods: {
    initRoutes() {
      if (this.funcVOList && this.funcVOList.length) {
        this.isInitRoutes = true;
        routes.forEach((route) => {
          route.children.forEach((setRoutesItem) => {
            // 去掉path的/，子路由不需要

            setRoutesItem.path = setRoutesItem.path.replace('/', '');
            // 设置按钮权限
            if (setRoutesItem.meta && setRoutesItem.meta.permission) {
              Object.keys(setRoutesItem.meta.permission).forEach((permissionKey) => {
                if (Object.prototype.toString.call(setRoutesItem.meta.permission[permissionKey]) === '[object object]') {
                  // permission下面的key的值是一个对象
                  Object.keys(setRoutesItem.meta.permission[permissionKey]).forEach((permissionObjKey) => {
                    const curFunc = this.funcVOList.find(item => item.funcKey === permissionObjKey);
                    if (curFunc) {
                      setRoutesItem.meta.permission[permissionKey][permissionObjKey] = curFunc.funcName;
                    }
                  });
                } else {
                  const curFunc = this.funcVOList.find(item => item.funcKey === permissionKey);
                  if (curFunc) {
                    setRoutesItem.meta.permission[permissionKey] = curFunc.funcName;
                  }
                }
              })
            }
          });
        });
        // 动态添加路由
        this.$router.addRoutes(routes);
      }
    },
  },
}
</script>
<style scoped>
  .app {
    height: 100%;
    -webkit-box-flex: 1;
    display: flex;
    flex: 1 1 auto;
    overflow: auto;
  }
</style>
