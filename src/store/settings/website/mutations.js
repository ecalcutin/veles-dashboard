import * as mutationTypes from './mutation-types';

export default {
  [mutationTypes.IMAGES_SET](state, { images, totalDocs }) {
    state.images.items = images;
    state.images.pagination.totalDocs = totalDocs;
  },
  [mutationTypes.PAGE_INDEX_SET](state, page) {
    state.images.pagination.page = page;
  },
  [mutationTypes.PAGE_LIMIT_SET](state, limit) {
    state.images.pagination.itemsPerPage = limit;
  },
  [mutationTypes.IMAGE_PUBLISH_TOGGLED](state, item) {
    const imageIndex = state.images.items.findIndex(i => i._id === item._id);
    state.images.items.splice(imageIndex, 1);
  }
};
