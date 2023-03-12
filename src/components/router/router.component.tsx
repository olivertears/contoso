import { FC } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { userService } from '../../services/user';
import { RouteNames } from './router.types';
import { NotFound } from '../pages/not-found';
import { Auth } from '../pages/auth';
import { Navbar } from '../templates/navbar';
import { Menu } from '../pages/menu';
import { Cart } from '../pages/cart';
import { Store } from '../pages/store';
import { Favorites } from '../pages/favorites';
import { Profile } from '../pages/profile';
import { Orders } from '../pages/orders';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {!!userService.user$ ? (
            <>
              <Route path={RouteNames.PROFILE} element={<Profile />} />
              <Route path={RouteNames.CART} element={<Cart />} />
              <Route path={RouteNames.FAVORITES} element={<Favorites />} />
              <Route path={RouteNames.ORDERS} element={<Orders />} />
            </>
          ) : (
            <Route path={RouteNames.AUTH} element={<Auth />} />
          )}
          <Route path={RouteNames.MENU} element={<Menu />} />
          <Route path={RouteNames.STORE} element={<Store />} />
          <Route path={RouteNames.NOT_FOUND} element={<NotFound />} />
          <Route path="*" element={<Navigate to={RouteNames.NOT_FOUND} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
