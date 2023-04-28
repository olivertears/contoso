import { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';
import { Table } from '../../templates/table';
import { SpecificationForm } from '../../forms/specification-form';
import { Loader, PageWrap } from '../../ui';
import { SPECIFICATIONS_HEADER } from './specifications.constants';
import { specificationTableAdapter } from './specifications.adapter';
import { specificationService } from '../../../services/specification';
import { productService } from '../../../services/product';
import { materialService } from '../../../services/material';

export const Specifications: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);
  const { isModalOpen, hideModal, selectedItemId, onTableIconClick } = useModal();

  useEffect(() => {
    fetchData().finally(() => setIsLoading(false));
  }, []);

  const fetchData = async () => {
    await specificationService.getSpecifications();
    await productService.getProducts();
    await materialService.getMaterials();
  };

  return (
    <PageWrap>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <SpecificationForm
          hideModal={hideModal}
          specification={specificationService.specifications$.find(
            (specification) => specification.id === selectedItemId
          )}
        />
      </Modal>
      {isLoading && <Loader />}
      <Table
        header={SPECIFICATIONS_HEADER}
        body={specificationTableAdapter(specificationService.specifications$)}
        onIconClick={onTableIconClick}
      />
    </PageWrap>
  );
});
