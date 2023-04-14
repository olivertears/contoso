import { FC } from 'react';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';
import { Table } from '../../templates/table';
import { MaterialForm } from '../../forms/material-form';
import { PageWrap } from '../../ui';
import { MATERIALS, MATERIALS_HEADER } from './materials.constants';
import { materialTableAdapter } from './materials.adapter';

export const Materials: FC = () => {
  const { isModalOpen, hideModal, selectedItemId, onTableIconClick } = useModal();

  return (
    <PageWrap>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <MaterialForm material={MATERIALS.find((material) => material.id === selectedItemId)} />
      </Modal>
      <Table
        header={MATERIALS_HEADER}
        body={materialTableAdapter(MATERIALS)}
        onIconClick={onTableIconClick}
      />
    </PageWrap>
  );
};
