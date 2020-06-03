import App from './App.vue';
import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';

let router = null;
let instance = null;

export async function bootstrap() {};

export async function mount({ emitFnc, data }) {
  router = new VueRouter({
    mode: 'hash',
    routes: [],
  });

  instance = new Vue({
    data: {
      mainAppVm: data.mainAppVm,
    },
    router,
    store: data.mainAppStore,
    render: h => h(App),
  }).$mount('#app');

  emitFnc.getChildAppVm(instance);
};

export async function unmount({ emitFnc }) {
  instance.$destroy();
  instance = null;
  router = null;

  emitFnc.getChildAppVm(null);
};
