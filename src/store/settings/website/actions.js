import api from '@/plugins/api';

import * as actionTypes from './action-types';
import * as mutationTypes from './mutation-types';

export default {
  async [actionTypes.PRODUCTS_GET]({ commit, state }) {
    const { itemsPerPage, page } = state.products.pagination;
    const response = await api.get(
      `/website/products?limit=${itemsPerPage}&page=${page}`
    );
    const products = response.data.docs;
    const totalDocs = response.data.totalDocs;
    const totalPages = response.data.totalPages;
    commit(mutationTypes.PRODUCTS_SET, { products, totalDocs, totalPages });
  },

  async [actionTypes.PRODUCT_DATA_UPDATE]({}, productData) {
    const { title, category, isPublished, _id, labels } = productData;
    await api.patch(`/website/products/${_id}`, {
      title,
      category,
      labels,
      isPublished
    });
  },
  async [actionTypes.PRODUCT_REMOVE]({ dispatch }, _id) {
    await api.delete(`/website/products/${_id}`);
    dispatch(actionTypes.PRODUCTS_GET);
  },

  // CATEGORIES
  async [actionTypes.CATEGORIES_GET]({ commit }) {
    const response = await api.get(`/website/products/categories`);
    commit(mutationTypes.CATEGORIES_SET, response.data);
  }
};
