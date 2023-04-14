import { FC } from 'react';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';
import { Table } from '../../templates/table';
import { EmployeeForm } from '../../forms/employee-form';
import { PageWrap } from '../../ui';
import { EMPLOYEES, EMPLOYEES_HEADER } from './employees.constants';
import { employeeTableAdapter } from './employees.adapter';

export const Employees: FC = () => {
  const { isModalOpen, hideModal, selectedItemId, onTableIconClick } = useModal();

  return (
    <PageWrap>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <EmployeeForm employee={EMPLOYEES.find((employee) => employee.id === selectedItemId)} />
      </Modal>
      <Table
        header={EMPLOYEES_HEADER}
        body={employeeTableAdapter(EMPLOYEES)}
        onIconClick={onTableIconClick}
      />
    </PageWrap>
  );
};
