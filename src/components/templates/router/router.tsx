import { FC } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { employeeService } from '../../../services/employee2';
import { RouteNames } from './router.types';
import { EmployeeRoleEnum } from '../../../interfaces';

import { Navbar } from '../navbar';
import {
  Authorization,
  Employees,
  MaterialOrders,
  Materials,
  ProductOrders,
  Products,
  Profile,
  Specifications
} from '../../pages';

export const Router: FC = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        {!employeeService.employee$ ? (
          <>
            <Route path={RouteNames.AUTHORIZATION} element={<Authorization />} />
            <Route path="*" element={<Navigate to={RouteNames.AUTHORIZATION} replace />} />
          </>
        ) : (
          <Route element={<Navbar />}>
            {employeeService.employee$.role === EmployeeRoleEnum.ADMIN ? (
              <>
                <Route path={RouteNames.EMPLOYEES} element={<Employees />} />
                <Route path={RouteNames.PROFILE} element={<Profile />} />
                <Route path="*" element={<Navigate to={RouteNames.EMPLOYEES} replace />} />
              </>
            ) : employeeService.employee$.role === EmployeeRoleEnum.TECHNOLOGIST ? (
              <>
                <Route path={RouteNames.PRODUCTS} element={<Products />} />
                <Route path={RouteNames.MATERIALS} element={<Materials />} />
                <Route path={RouteNames.SPECIFICATIONS} element={<Specifications />} />
                <Route path={RouteNames.PROFILE} element={<Profile />} />
                <Route path="*" element={<Navigate to={RouteNames.PRODUCTS} replace />} />
              </>
            ) : employeeService.employee$.role === EmployeeRoleEnum.DISPATCHER ? (
              <>
                <Route path={RouteNames.PRODUCT_ORDERS} element={<ProductOrders />} />
                <Route path={RouteNames.PROFILE} element={<Profile />} />
                <Route path="*" element={<Navigate to={RouteNames.PRODUCT_ORDERS} replace />} />
              </>
            ) : (
              <>
                <Route path={RouteNames.PRODUCT_ORDERS} element={<ProductOrders />} />
                <Route path={RouteNames.MATERIAL_ORDERS} element={<MaterialOrders />} />
                <Route path={RouteNames.PROFILE} element={<Profile />} />
                <Route path="*" element={<Navigate to={RouteNames.PRODUCT_ORDERS} replace />} />
              </>
            )}
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
});
