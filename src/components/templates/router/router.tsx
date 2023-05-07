import { FC, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { userService } from '../../../services/user';
import { RouteNames } from './router.types';
import { authGuard } from './utils';

import { Navbar } from '../navbar';
import { ProtectedRoute } from './protected-route';

import { Authorization } from '../../pages/authorization';
import { NotFound } from '../../pages/not-found';
import { Profile } from '../../pages/profile';
import { Employees } from '../../pages/employees';
import { Products } from '../../pages/products';
import { Materials } from '../../pages/materials';
import { ProductOrders } from '../../pages/product-orders';
import { ProductOrdersArchive } from '../../pages/product-orders-archive';
import { MaterialOrders } from '../../pages/material-orders';
import { ProductOrderTabs } from '../../proccesses/product-order-tabs';
import { MaterialOrderTabs } from '../../proccesses/material-order-tabs';
import { MaterialOrdersArchive } from '../../pages/material-orders-archive';

export const Router: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    userService.getUser().finally(() => setIsLoading(false));
  }, []);

  return isLoading ? null : (
    <BrowserRouter>
      <Routes>
        {!userService.user$ && (
          <>
            <Route path={RouteNames.AUTHORIZATION} element={<Authorization />} />
            <Route path="*" element={<Navigate to={RouteNames.AUTHORIZATION} replace />} />
          </>
        )}

        <Route element={<ProtectedRoute guard={authGuard} />}>
          <Route element={<Navbar />}>
            <Route path={RouteNames.EMPLOYEES} element={<Employees />} />
            <Route path={RouteNames.PRODUCTS} element={<Products />} />
            <Route path={RouteNames.MATERIALS} element={<Materials />} />

            <Route path={RouteNames.PRODUCT_ORDERS} element={<ProductOrderTabs />}>
              <Route path={RouteNames.PRODUCT_ORDERS} element={<ProductOrders />} />
              <Route path={RouteNames.PRODUCT_ORDERS_ARCHIVE} element={<ProductOrdersArchive />} />
            </Route>
            <Route path={RouteNames.MATERIAL_ORDERS} element={<MaterialOrderTabs />}>
              <Route path={RouteNames.MATERIAL_ORDERS} element={<MaterialOrders />} />
              <Route
                path={RouteNames.MATERIAL_ORDERS_ARCHIVE}
                element={<MaterialOrdersArchive />}
              />
            </Route>
            <Route path={RouteNames.PROFILE} element={<Profile />} />
            <Route path={RouteNames.NOT_FOUND} element={<NotFound />} />
            <Route path="*" element={<Navigate to={RouteNames.NOT_FOUND} replace />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
});
