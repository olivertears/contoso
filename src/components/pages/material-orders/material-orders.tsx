import { FC } from 'react';
import { useModal } from '../../../hooks';
import { Modal, Table } from '../../templates';
import { MaterialOrderForm } from '../../forms';
import { PageWrap } from '../../ui';
import { MATERIAL_ORDERS, MATERIAL_ORDERS_HEADER } from './material-orders.constants';
import { materialOrderTableAdapter } from './material-orders.adapter';

export const MaterialOrders: FC = () => {
  const { isModalOpen, hideModal, selectedItemId, onTableIconClick } = useModal();

  return (
    <PageWrap>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <MaterialOrderForm
          materialOrder={MATERIAL_ORDERS.find(
            (materialOrder) => materialOrder.id === selectedItemId
          )}
        />
      </Modal>
      <Table
        header={MATERIAL_ORDERS_HEADER}
        body={materialOrderTableAdapter(MATERIAL_ORDERS)}
        onIconClick={onTableIconClick}
      />
    </PageWrap>
  );
};
