import WebsiteModule from './website';

import actions from './actions';
import mutations from './mutations';

export default {
  state: {
    categories: [],
    labels: [],
    products: {
      items: [],
      pagination: {
        itemsPerPage: 10,
        totalDocs: 0,
        page: 1
      }
    },
    stores: []
  },
  actions,
  mutations,
  modules: {
    website: WebsiteModule
  }
};
