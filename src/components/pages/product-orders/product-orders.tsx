import { FC, useEffect, useState } from 'react';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';
import { ProductOrderForm } from '../../forms/product-order-form';
import { Loader, Title } from '../../ui';
import { productOrderService } from '../../../services/product-order';
import { productService } from '../../../services/product';
import { KanbanBoard } from '../../templates/kanban-board';
import * as S from './product-orders.styles';
import { useParams } from 'react-router-dom';
import { specificationService } from '../../../services/specification';
import { KanbanColumn } from '../../templates/kanban-board/kanban-board.types';
import { ProductOrderStatusEnum } from '../../../interfaces';

export const ProductOrders: FC = () => {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { isModalOpen, hideModal, selectedItemId } = useModal();

  useEffect(() => {
    fetchData().finally(() => setIsLoading(false));
  }, []);

  const fetchData = async () => {
    await productService.getProducts();
    await productOrderService.getProductOrders();
    await specificationService.getSpecifications();
  };

  const ORDER_STATUSES: ProductOrderStatusEnum[] = [
    ProductOrderStatusEnum.CANCELLED,
    ProductOrderStatusEnum.PROCESSING,
    ...((specificationService.specifications$
      .find((specification) => specification.itemId === Number(productId) && specification.active)
      ?.operations.map(({ name }) => name) || []) as unknown as ProductOrderStatusEnum[]),
    ProductOrderStatusEnum.DELIVERY,
    ProductOrderStatusEnum.DONE
  ];

  const KANBAN_COLUMNS: KanbanColumn[] = ORDER_STATUSES.map((orderStatus) => ({
    name: orderStatus,
    productOrders: productOrderService.productOrders$.filter(
      (product) => product.itemId === Number(productId) && product.status === orderStatus
    )
  }));

  return (
    <S.ProductOrdersWrap>
      <Title></Title>
      <KanbanBoard kanbanColumns={KANBAN_COLUMNS} />
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <ProductOrderForm
          hideModal={hideModal}
          productOrder={productOrderService.productOrders$.find(
            (productOrder) => productOrder.id === selectedItemId
          )}
        />
      </Modal>
      {isLoading && <Loader />}
      {/*<Table*/}
      {/*  header={PRODUCT_ORDERS_HEADER}*/}
      {/*  body={productOrderTableAdapter(productOrderService.productOrders$)}*/}
      {/*  onIconClick={onTableIconClick}*/}
      {/*/>*/}
    </S.ProductOrdersWrap>
  );
};
