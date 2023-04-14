import { FC } from 'react';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';
import { Table } from '../../templates/table';
import { SpecificationForm } from '../../forms/specification-form';
import { PageWrap } from '../../ui';
import { SPECIFICATIONS, SPECIFICATIONS_HEADER } from './specifications.constants';
import { specificationTableAdapter } from './specifications.adapter';

export const Specifications: FC = () => {
  const { isModalOpen, hideModal, selectedItemId, onTableIconClick } = useModal();

  return (
    <PageWrap>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <SpecificationForm
          specification={SPECIFICATIONS.find(
            (specification) => specification.id === selectedItemId
          )}
        />
      </Modal>
      <Table
        header={SPECIFICATIONS_HEADER}
        body={specificationTableAdapter(SPECIFICATIONS)}
        onIconClick={onTableIconClick}
      />
    </PageWrap>
  );
};
