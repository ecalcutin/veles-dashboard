import Vue from 'vue';
import Vuex from 'vuex';

import UIModule from '@/store/ui';
import SettingsModule from '@/store/settings';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    UI: UIModule,
    settings: SettingsModule
  }
});
