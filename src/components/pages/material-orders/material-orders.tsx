import { FC, useEffect, useState } from 'react';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';
import { Table } from '../../templates/table';
import { MaterialOrderForm } from '../../forms/material-order-form';
import { Loader, PageWrap } from '../../ui';
import { MATERIAL_ORDERS_HEADER } from './material-orders.constants';
import { materialOrderTableAdapter } from './material-orders.adapter';
import { productOrderService } from '../../../services/product-order';
import { employeeService } from '../../../services/employee';
import { materialService } from '../../../services/material';
import { materialOrderService } from '../../../services/material-order';

export const MaterialOrders: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isModalOpen, hideModal, selectedItemId, onTableIconClick } = useModal();

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
    <PageWrap>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <MaterialOrderForm
          hideModal={hideModal}
          materialOrder={materialOrderService.materialOrders$.find(
            (materialOrder) => materialOrder.id === selectedItemId
          )}
        />
      </Modal>
      {isLoading && <Loader />}
      <Table
        header={MATERIAL_ORDERS_HEADER}
        body={materialOrderTableAdapter(materialOrderService.materialOrders$)}
        onIconClick={onTableIconClick}
      />
    </PageWrap>
  );
};
