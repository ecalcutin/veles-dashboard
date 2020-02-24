import * as mutationTypes from './mutation-types';

export default {
  [mutationTypes.UI_SIDENAV_TOGGLED](state) {
    state.sideNav.opened = !state.sideNav.opened;
  }
};
