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

  async [actionTypes.IMAGE_DATA_UPDATE]({ }, imageData) {
    const { title, category, isPublished, _id, labels } = imageData;
    await api.patch(`/website/images/${_id}`, {
      title,
      category,
      labels,
      isPublished
    });
  },
  async [actionTypes.IMAGE_REMOVE]({ dispatch }, id) {
    await api.delete(`/website/images/${id}`);
    dispatch(actionTypes.IMAGES_GET);
  },

  // CATEGORIES
  async [actionTypes.CATEGORIES_GET]({ commit }) {
    const response = await api.get(`/website/categories`);
    commit(mutationTypes.CATEGORIES_SET, response.data);
  },
};
