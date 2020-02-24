import RouteWrapper from '@/components/RouteWrapper';
import SettingsPage from './SettingsPage';

import Categories from './erp-content/Categories';
import Products from './erp-content/Products';

export default {
  path: 'settings',
  component: SettingsPage,
  children: [
    {
      path: '',
      component: RouteWrapper,
      redirect: 'erp-content'
    },
    {
      path: 'erp-content',
      component: RouteWrapper,
      children: [
        { path: '', redirect: 'products' },
        { path: 'categories', component: Categories },
        { path: 'products', component: Products }
      ]
    }
  ]
};
