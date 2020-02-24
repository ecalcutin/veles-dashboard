import Vue from 'vue';
import Vuex from 'vuex';

import UIModule from '@/store/ui';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    UI: UIModule
  }
});
