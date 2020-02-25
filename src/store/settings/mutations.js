import * as mutationTypes from './mutation-types';

export default {
  [mutationTypes.SETTINGS_PRODUCTS_SET](state, paginatedData) {
    state.products.items = paginatedData.docs;
    state.products.pagination.totalDocs = paginatedData.totalDocs;
  },
  [mutationTypes.SETTINGS_PRODUCTS_PAGE_CHANGE](state, page) {
    // state.products.pagination.page = page;
    state.products.pagination.page = page;
  },
  [mutationTypes.SETTINGS_PRODUCTS_ITEMS_PER_PAGE_CHANGE](state, itemsPerPage) {
    // state.products.pagination.page = page;
    state.products.pagination.itemsPerPage = itemsPerPage;
  }
};
