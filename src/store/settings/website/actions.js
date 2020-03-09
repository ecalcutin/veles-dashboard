import api from '@/plugins/api';

import * as actionTypes from './action-types';
import * as mutationTypes from './mutation-types';

export default {
  async [actionTypes.IMAGES_GET]({ commit, state }) {
    const { itemsPerPage, page } = state.images.pagination;
    const response = await api.get(
      `/website/images?limit=${itemsPerPage}&page=${page}`
    );
    const images = response.data.docs;
    const totalDocs = response.data.totalDocs;
    commit(mutationTypes.IMAGES_SET, { images, totalDocs });
  },

  async [actionTypes.IMAGE_DATA_UPDATE]({}, imageData) {
    const { title, category, isPublished, _id, labels } = imageData;
    await api.patch(`/website/images/${_id}`, {
      title,
      category,
      labels,
      isPublished
    });
  },
  async [actionTypes.IMAGE_REMOVE]({ dispatch }, _id) {
    await api.delete(`/website/images/${_id}`);
    dispatch(actionTypes.IMAGES_GET);
  },

  // CATEGORIES
  async [actionTypes.CATEGORIES_GET]({ commit }) {
    const response = await api.get(`/website/categories`);
    commit(mutationTypes.CATEGORIES_SET, response.data);
  },
  async [actionTypes.CATEGORY_CREATE]({ commit }, category) {
    const response = await api.post(`/website/categories`, category);
  },
  async [actionTypes.CATEGORY_UPDATE]({ commit }, categoryData) {
    const { _id } = categoryData;
    delete categoryData._id;
    const response = await api.patch(
      `/website/categories/${_id}`,
      categoryData
    );
  },
  async [actionTypes.CATEGORY_REMOVE]({ commit }, _id) {
    const response = await api.delete(`/website/categories/${_id}`);
  },

  // LALEBS
  async [actionTypes.LABELS_GET]({ commit }) {
    const response = await api.get(`/website/labels`);
    commit(mutationTypes.LABELS_SET, response.data);
  },
  async [actionTypes.LABEL_CREATE]({ commit }, label) {
    const response = await api.post(`/website/labels`, label);
  },
  async [actionTypes.LABEL_UPDATE]({ commit }, labelData) {
    const { _id } = labelData;
    delete labelData._id;
    const response = await api.patch(`/website/labels/${_id}`, labelData);
  },
  async [actionTypes.LABEL_REMOVE]({ commit }, _id) {
    const response = await api.delete(`/website/labels/${_id}`);
  }
};
