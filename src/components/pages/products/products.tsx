import { FC } from 'react';
import { useModal } from '../../../hooks';
import { Button, PageWrap } from '../../ui';
import { Modal } from '../../templates';
import { ProductForm } from '../../forms';

export const Products: FC = () => {
  const { isModalOpen, showModal, hideModal } = useModal();

  return (
    <PageWrap>
      <Button onClick={showModal}>ДОБАВИТЬ</Button>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <ProductForm />
      </Modal>
    </PageWrap>
  );
};
