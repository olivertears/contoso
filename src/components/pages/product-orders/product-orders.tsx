import { FC } from 'react';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';
import { Table } from '../../templates/table';
import { ProductOrderForm } from '../../forms/product-order-form';
import { PageWrap } from '../../ui';
import { PRODUCT_ORDERS, PRODUCT_ORDERS_HEADER } from './product-orders.constants';
import { productOrderTableAdapter } from './product-orders.adapter';

export const ProductOrders: FC = () => {
  const { isModalOpen, hideModal, selectedItemId, onTableIconClick } = useModal();

  return (
    <PageWrap>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <ProductOrderForm
          productOrder={PRODUCT_ORDERS.find((productOrder) => productOrder.id === selectedItemId)}
        />
      </Modal>
      <Table
        header={PRODUCT_ORDERS_HEADER}
        body={productOrderTableAdapter(PRODUCT_ORDERS)}
        onIconClick={onTableIconClick}
      />
    </PageWrap>
  );
};
