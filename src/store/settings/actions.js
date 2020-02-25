import api from '@/plugins/api';

import * as actionTypes from './action-types';
import * as mutationTypes from './mutation-types';

export default {
  async [actionTypes.SETTINGS_PRODUCTS_GET]({ commit, state }) {
    const { itemsPerPage, page } = state.products.pagination;
    const response = await api.get(
      `/products?limit=${itemsPerPage}&page=${page}`
    );
    console.log(response.data)
    const paginatedData = response.data;
    commit(mutationTypes.SETTINGS_PRODUCTS_SET, paginatedData);
  }
};
