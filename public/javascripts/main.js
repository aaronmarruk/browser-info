const Vue = require('vue/dist/vue.min.js');
const Vuex = require('vuex');
const VueRouter = require('vue-router');
const Axios = require('axios');
const demo = require('./components/demo.vue');
const loading = require('./components/loading.vue');
const switcher = require('./components/switcher.vue');

Vue.use(VueRouter)
Vue.use(Vuex);

Vue.component('demo', demo);
Vue.component('loading', loading);
Vue.component('app', switcher);

const router = new VueRouter({ mode: 'history' });

const store = new Vuex.Store({
  state: {
    isLoading: true,
    timestamp: undefined,
    report: undefined,
    pathname: window.location.pathname,
  },
  getters : {
    REPORT: state => state.report,
    TIMESTAMP: state => state.timestamp,
    PATH_NAME: state => state.pathname,
    IS_LOADING: state => state.isLoading,
  },
  mutations: {
    SET_REPORT: (state, report) => {
      state.report = report;
    },
    SET_TIMESTAMP: (state, timestamp) => {
      state.timestamp = timestamp;
    },
    SET_IS_LOADING: (state, isLoading) => {
      state.isLoading = isLoading;
    }
  },
  actions : {
    SAVE_REPORT: async (context, payload) => {
      let { data: { report, timestamp } } = await Axios.post(
        '/api/v1/report',
        payload
      );

      context.commit('SET_REPORT', report);
      context.commit('SET_TIMESTAMP', timestamp);
    },
    SET_INITIAL_STATE_FROM_PROPS: async (context, { report, timestamp }) => {
      context.commit('SET_REPORT', report);
      context.commit('SET_TIMESTAMP', timestamp);
      context.commit('SET_IS_LOADING', false);
    }
  }  
})

const app = new Vue({
  el: '[data-behaviour="vue"]',
  router,
  store,
});

module.exports = app;