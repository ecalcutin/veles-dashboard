import Vue from 'vue';
import Vuex from 'vuex';

import UIModule from '@/store/ui';
import SettingsModule from '@/store/settings';

import { PRODUCTS_GET, CATEGORIES_GET } from '@/store/settings/action-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    '__APP_INIT__': ({ dispatch }) => {
      dispatch(PRODUCTS_GET);
      dispatch(CATEGORIES_GET);
    }
  },
  modules: {
    UI: UIModule,
    settings: SettingsModule
  }
});
