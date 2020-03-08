import Vue from 'vue';
import Vuex from 'vuex';

import UIModule from '@/store/ui';
import SettingsModule from '@/store/settings';

import { PRODUCTS_GET, CATEGORIES_GET, LABELS_GET } from '@/store/settings/action-types';
import { CATEGORIES_GET as WebsiteCategories, LABELS_GET as WebsiteLabels } from '@/store/settings/website/action-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    '__APP_INIT__': ({ dispatch }) => {
      // dispatch(PRODUCTS_GET);
      // dispatch(CATEGORIES_GET);
      // dispatch(LABELS_GET);
      dispatch(WebsiteCategories);
    }
  },
  modules: {
    UI: UIModule,
    settings: SettingsModule
  }
});
