import { FC, useEffect, useState } from 'react';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';
import { Table } from '../../templates/table';
import { ProductForm } from '../../forms/product-form';
import { Loader, PageWrap } from '../../ui';
import { PRODUCTS_HEADER } from './products.constants';
import { productTableAdapter } from './products.adapter';
import { productService } from '../../../services/product';

export const Products: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isModalOpen, hideModal, selectedItemId, onTableIconClick } = useModal();

  useEffect(() => {
    productService.getProducts().finally(() => setIsLoading(false));
  }, []);

  return (
    <PageWrap>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <ProductForm
          hideModal={hideModal}
          product={productService.products$.find((product) => product.id === selectedItemId)}
        />
      </Modal>
      {isLoading && <Loader />}
      <Table
        header={PRODUCTS_HEADER}
        body={productTableAdapter(productService.products$)}
        onIconClick={onTableIconClick}
      />
    </PageWrap>
  );
};
