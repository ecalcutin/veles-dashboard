import * as mutationTypes from './mutation-types';

export default {
  [mutationTypes.SETTINGS_PRODUCTS_SET](state, products) {
    state.products = products;
  }
};
