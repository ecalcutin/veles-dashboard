import actions from './actions';
import mutations from './mutations';

export default {
  state: {
    categories: [],
    labels: [],
    images: {
      items: [],
      pagination: {
        itemsPerPage: 9,
        totalPages: 0,
        totalDocs: 0,
        page: 1
      }
    }
  },
  actions,
  mutations
};
