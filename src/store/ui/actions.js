import * as actionTypes from './action-types';
import * as mutationTypes from './mutation-types';

export default {
  [actionTypes.UI_SIDENAV_TOGGLE]({ commit }) {
    commit(mutationTypes.UI_SIDENAV_TOGGLED);
  }
};
