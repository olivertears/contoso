import { FC, useState } from 'react';
import { useModal } from '../../../hooks';
import { Modal, Table } from '../../templates';
import { EmployeeForm } from '../../forms';
import { PageWrap } from '../../ui';
import { EMPLOYEES, PROFILES_HEADER } from './employees.constants';
import { employeeTableAdapter } from './employees.adapter';

export const Employees: FC = () => {
  const { isModalOpen, showModal, hideModal } = useModal();
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | null>(null);

  const onTableIconClick = (id: number | null) => {
    setSelectedEmployeeId(id);
    showModal();
  };

  return (
    <PageWrap>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <EmployeeForm employee={EMPLOYEES.find((employee) => employee.id === selectedEmployeeId)} />
      </Modal>
      <Table
        header={PROFILES_HEADER}
        body={employeeTableAdapter(EMPLOYEES)}
        onIconClick={onTableIconClick}
      />
    </PageWrap>
  );
};
