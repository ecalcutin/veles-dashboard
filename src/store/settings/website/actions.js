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

  async [actionTypes.IMAGE_TOGGLE_PUBLISH]({ commit, state }, { id, publishOption }) {
    const response = await api.patch(`/website/images/${id}/publish`, { publishOption });
    commit(mutationTypes.IMAGE_PUBLISH_TOGGLED, response.data)
  }
};
