import * as mutationTypes from './mutation-types';

export default {
  [mutationTypes.PRODUCTS_SET](state, { products, totalDocs }) {
    state.products.items = products;
    state.products.pagination.totalDocs = totalDocs;
  },
  [mutationTypes.PAGE_INDEX_SET](state, page) {
    state.products.pagination.page = page;
  },
  [mutationTypes.PAGE_LIMIT_SET](state, limit) {
    state.products.pagination.itemsPerPage = limit;
  }
};
