import Home from '../pages/home';
import MenuPage from '../pages/menu';
import DeliveryPage from '../pages/delivery';
import OrderPage from '../pages/order';

export const isDefaultPages = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/menu',
    component: MenuPage,
  },
  {
    path: '/delivery',
    component: DeliveryPage,
  },
  {
    path: '/order',
    component: OrderPage,
  },
];
