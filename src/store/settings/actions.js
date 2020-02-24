import api from '@/plugins/api';

import * as actionTypes from './action-types';
import * as mutationTypes from './mutation-types';

export default {
  async [actionTypes.SETTINGS_PRODUCTS_GET]({ commit }) {
    const { data: products } = await api.get('/products');
    commit(mutationTypes.SETTINGS_PRODUCTS_SET, products);
  }
};
