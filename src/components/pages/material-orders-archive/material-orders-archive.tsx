import { FC, useEffect, useState } from 'react';
import { Table } from '../../templates/table';
import { Loader } from '../../ui';
import { MATERIAL_ORDERS_HEADER } from './material-orders-archive.constants';
import { materialOrderTableAdapter } from './material-orders-archive.adapter';
import { productOrderService } from '../../../services/product-order';
import { employeeService } from '../../../services/employee';
import { materialService } from '../../../services/material';
import { materialOrderService } from '../../../services/material-order';

export const MaterialOrdersArchive: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData().finally(() => setIsLoading(false));
  }, []);

  const fetchData = async () => {
    await productOrderService.getProductOrders();
    await materialService.getMaterials();
    await employeeService.getEmployees();
    await materialOrderService.getMaterialOrders();
  };

  return (
    <>
      {isLoading && <Loader />}
      <Table
        header={MATERIAL_ORDERS_HEADER}
        body={materialOrderTableAdapter(
          materialOrderService.materialOrders$.filter(
            ({ status }) => status.toString() === 'ARCHIVED'
          )
        )}
        onIconClick={() => {}}
        hasRights={false}
      />
    </>
  );
};
