import { FC } from 'react';
import { useModal } from '../../../hooks';
import { Button, PageWrap } from '../../ui';
import { Modal } from '../../templates/modal';
import { EmployeeForm } from '../../forms/employee-form';

export const Profiles: FC = () => {
  const { isModalOpen, showModal, hideModal } = useModal();

  return (
    <PageWrap>
      <Button onClick={showModal}>ДОБАВИТЬ РАБОТНИКА</Button>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <EmployeeForm />
      </Modal>
    </PageWrap>
  );
};
