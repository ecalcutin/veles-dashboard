import * as actionTypes from './action-types';
import * as mutationTypes from './mutation-types';

export default {
  [actionTypes.SETTINGS_PRODUCTS_GET]({ commit }) {
    commit(mutationTypes.SETTINGS_PRODUCTS_SET);
  }
};
