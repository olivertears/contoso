import { FC, useEffect, useState } from 'react';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';
import { Table } from '../../templates/table';
import { ProductOrderForm } from '../../forms/product-order-form';
import { Loader, PageWrap } from '../../ui';
import { PRODUCT_ORDERS_HEADER } from './product-orders.constants';
import { productOrderTableAdapter } from './product-orders.adapter';
import { productOrderService } from '../../../services/product-order';
import { productService } from '../../../services/product';

export const ProductOrders: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isModalOpen, hideModal, selectedItemId, onTableIconClick } = useModal();

  useEffect(() => {
    fetchData().finally(() => setIsLoading(false));
  }, []);

  const fetchData = async () => {
    await productService.getProducts();
    await productOrderService.getProductOrders();
  };

  return (
    <PageWrap>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <ProductOrderForm
          hideModal={hideModal}
          productOrder={productOrderService.productOrders$.find(
            (productOrder) => productOrder.id === selectedItemId
          )}
        />
      </Modal>
      {isLoading && <Loader />}
      <Table
        header={PRODUCT_ORDERS_HEADER}
        body={productOrderTableAdapter(productOrderService.productOrders$)}
        onIconClick={onTableIconClick}
      />
    </PageWrap>
  );
};
