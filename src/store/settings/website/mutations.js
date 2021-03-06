import * as mutationTypes from './mutation-types';

export default {
  [mutationTypes.PRODUCTS_SET](state, { products, totalDocs, totalPages }) {
    state.products.items = products;
    state.products.pagination.totalDocs = totalDocs;
    state.products.pagination.totalPages = totalPages;
  },
  [mutationTypes.PAGE_INDEX_SET](state, page) {
    state.products.pagination.page = page;
  },
  [mutationTypes.PAGE_LIMIT_SET](state, limit) {
    state.products.pagination.itemsPerPage = limit;
  },

  [mutationTypes.CATEGORIES_SET](state, categories) {
    state.categories = categories;
  }
};
