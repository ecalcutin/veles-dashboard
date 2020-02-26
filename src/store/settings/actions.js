import api from '@/plugins/api';

import * as actionTypes from './action-types';
import * as mutationTypes from './mutation-types';

export default {
  async [actionTypes.PRODUCTS_GET]({ commit, state }) {
    const { itemsPerPage, page } = state.products.pagination;
    const response = await api.get(
      `/products?limit=${itemsPerPage}&page=${page}`
    );
    const products = response.data.docs;
    const totalDocs = response.data.totalDocs;
    commit(mutationTypes.PRODUCTS_SET, { products, totalDocs });
  },
  async [actionTypes.PRODUCT_REMOVE]({ dispatch }, id) {
    await api.delete(`/products/${id}`);
    dispatch(actionTypes.PRODUCTS_GET);
  },
  async [actionTypes.PRODUCT_CREATE]({ dispatch }, product) {
    const fd = new FormData();
    for (let key in product) {
      fd.append(key, product[key]);
    }
    await api.post('/products', fd, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    dispatch(actionTypes.PRODUCTS_GET);
  }
};
