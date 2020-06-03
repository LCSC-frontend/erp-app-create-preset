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
      funcVOListTree() {
        return this.$store.state.funcVOListTree;
      },
    },
    watch: {
      funcVOListTree(newValue) {
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
        if (!this.funcVOListTree || !this.funcVOListTree.length) return;
        this.isInitRoutes = true;
        routes[0].children.forEach((setRoutesItem) => {
          // 去掉path的/，子路由不需要
          setRoutesItem.path = setRoutesItem.path.replace('/', '');
          // 设置按钮权限
          this.funcVOListTree.forEach((menuWrap) => {
            if (menuWrap.childList) {
              menuWrap.childList.forEach((level1Menu) => {
                if (setRoutesItem.key === level1Menu.funcKey) {
                  if (level1Menu.childList) {
                    level1Menu.childList.forEach((pageBtn) => {
                      setRoutesItem.meta.permission[pageBtn.funcKey] = pageBtn.funcName;
                    });
                  }
                }
              });
            }
          });
        });
        // 动态添加路由
        this.$router.addRoutes(routes);
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
