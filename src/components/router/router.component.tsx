import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { employeeService } from '../../services/employee';
import { RouteNames } from './router.types';
import { NotFound } from '../pages/not-found';
import { SignIn } from '../pages/sign-in';
import { Navbar } from '../templates/navbar';
import { Profiles } from '../pages/profiles';
import { Products } from '../pages/products';
import { Specifications } from '../pages/specifications';
import { ProductionOrders } from '../pages/production-orders';
import { TakeawayOrders } from '../pages/takeaway-orders';
import { EmployeeRoleEnum } from '../../interfaces/IEmployee';
import { observer } from 'mobx-react-lite';

export const Router: FC = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        {!employeeService.employee$ ? (
          <Route path={RouteNames.SIGN_IN} element={<SignIn />} />
        ) : (
          <Route element={<Navbar />}>
            {employeeService.employee$.role === EmployeeRoleEnum.TECHNOLOGIST ? (
              <>
                <Route path={RouteNames.PROFILES} element={<Profiles />} />
                <Route path={RouteNames.PRODUCTS} element={<Products />} />
                <Route path={RouteNames.SPECIFICATIONS} element={<Specifications />} />
                <Route path="*" element={<Navigate to={RouteNames.PROFILES} replace />} />
              </>
            ) : employeeService.employee$.role === EmployeeRoleEnum.DISPATCHER ? (
              <>
                <Route path={RouteNames.PRODUCTION_ORDERS} element={<ProductionOrders />} />
                <Route path="*" element={<Navigate to={RouteNames.PRODUCTION_ORDERS} replace />} />
              </>
            ) : (
              <>
                <Route path={RouteNames.TAKEAWAY_ORDERS} element={<TakeawayOrders />} />
                <Route path={RouteNames.PRODUCTION_ORDERS} element={<ProductionOrders />} />
                <Route path="*" element={<Navigate to={RouteNames.TAKEAWAY_ORDERS} replace />} />
              </>
            )}
          </Route>
        )}
        <Route path={RouteNames.NOT_FOUND} element={<NotFound />} />
        <Route
          path="*"
          element={
            <Navigate
              to={employeeService.employee$ ? RouteNames.NOT_FOUND : RouteNames.SIGN_IN}
              replace
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
});
