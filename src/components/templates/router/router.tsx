import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { userService } from '../../../services/user';
import { RouteNames } from './router.types';
import { authGuard, roleGuard } from './utils';

import { Navbar } from '../navbar';
import { ProtectedRoute } from './protected-route';

import { Authorization } from '../../pages/authorization';
import { NotFound } from '../../pages/not-found';
import { Profile } from '../../pages/profile';
import { Employees } from '../../pages/employees';
import { Products } from '../../pages/products';
import { Materials } from '../../pages/materials';
import { Specifications } from '../../pages/specifications';
import { ProductOrders } from '../../pages/product-orders';
import { MaterialOrders } from '../../pages/material-orders';
import { EmployeeRoleEnum } from '../../../interfaces';

export const Router: FC = observer(() => {
  return (
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
            <Route element={<ProtectedRoute guard={roleGuard([EmployeeRoleEnum.ADMIN])} />}>
              <Route path={RouteNames.EMPLOYEES} element={<Employees />} />
            </Route>

            <Route element={<ProtectedRoute guard={roleGuard([EmployeeRoleEnum.TECHNOLOGIST])} />}>
              <Route path={RouteNames.PRODUCTS} element={<Products />} />
              <Route path={RouteNames.MATERIALS} element={<Materials />} />
              <Route path={RouteNames.SPECIFICATIONS} element={<Specifications />} />
            </Route>

            <Route
              element={
                <ProtectedRoute
                  guard={roleGuard([
                    EmployeeRoleEnum.DISPATCHER,
                    EmployeeRoleEnum.ASSEMBLY,
                    EmployeeRoleEnum.PAINTING
                  ])}
                />
              }
            >
              <Route path={RouteNames.PRODUCT_ORDERS} element={<ProductOrders />} />
            </Route>

            <Route
              element={
                <ProtectedRoute
                  guard={roleGuard([EmployeeRoleEnum.ASSEMBLY, EmployeeRoleEnum.PAINTING])}
                />
              }
            >
              <Route path={RouteNames.MATERIAL_ORDERS} element={<MaterialOrders />} />
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
