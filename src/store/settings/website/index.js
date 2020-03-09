import actions from './actions';
import mutations from './mutations';

export default {
  state: {
    categories: [],
    labels: [],
    images: {
      items: [],
      pagination: {
        itemsPerPage: 10,
        totalDocs: 0,
        page: 1
      }
    }
  },
  actions,
  mutations
};
