import { FC, useEffect, useState } from 'react';
import { Loader } from '../../ui';
import { productOrderService } from '../../../services/product-order';
import { productService } from '../../../services/product';
import { specificationService } from '../../../services/specification';
import { Table } from '../../templates/table';
import { PRODUCT_ORDERS_HEADER } from './product-orders-archive.constants';
import { productOrderTableAdapter } from './product-orders-archive.adapter';

export const ProductOrdersArchive: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData().finally(() => setIsLoading(false));
  }, []);

  const fetchData = async () => {
    await productService.getProducts();
    await productOrderService.getProductOrders();
    await specificationService.getSpecifications();
  };

  return (
    <>
      {isLoading && <Loader />}
      <Table
        header={PRODUCT_ORDERS_HEADER}
        body={productOrderTableAdapter(
          productOrderService.productOrders$.filter(
            ({ status }) => status.toString() === 'ARCHIVED'
          )
        )}
        hasRights={false}
        onIconClick={() => {}}
      />
    </>
  );
};
