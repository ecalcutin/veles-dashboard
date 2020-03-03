import RouteWrapper from '@/components/RouteWrapper';
import SettingsPage from './SettingsPage';

import Categories from './erp-content/Categories';
import Products from './erp-content/Products';

import WebsiteImages from './website/WebsiteImages';

export default {
  path: 'settings',
  component: RouteWrapper,
  children: [
    {
      path: '',
      component: SettingsPage
    },
    {
      path: 'erp-content',
      component: RouteWrapper,
      children: [
        { path: 'categories', component: Categories },
        { path: 'products', component: Products }
      ]
    },
    {
      path: 'website',
      component: RouteWrapper,
      children: [
        {
          path: 'images',
          component: WebsiteImages
        }
      ]
    }
  ]
};
