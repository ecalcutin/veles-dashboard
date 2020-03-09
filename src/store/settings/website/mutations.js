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

  [mutationTypes.CATEGORIES_SET](state, categories) {
    state.categories = categories;
  },
  [mutationTypes.LABELS_SET](state, labels) {
    state.labels = labels;
  }
};
