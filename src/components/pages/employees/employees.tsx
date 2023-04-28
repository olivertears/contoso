import { FC, useEffect, useState } from 'react';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';
import { Table } from '../../templates/table';
import { EmployeeForm } from '../../forms/employee-form';
import { Loader, PageWrap } from '../../ui';
import { EMPLOYEES_HEADER } from './employees.constants';
import { employeeTableAdapter } from './employees.adapter';
import { employeeService } from '../../../services/employee';

export const Employees: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isModalOpen, hideModal, selectedItemId, onTableIconClick } = useModal();

  useEffect(() => {
    employeeService.getEmployees().finally(() => setIsLoading(false));
  }, []);

  return (
    <PageWrap>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <EmployeeForm
          employee={employeeService.employees$.find((employee) => employee.id === selectedItemId)}
          hideModal={hideModal}
        />
      </Modal>
      {isLoading && <Loader />}
      <Table
        header={EMPLOYEES_HEADER}
        body={employeeTableAdapter(employeeService.employees$)}
        onIconClick={onTableIconClick}
      />
    </PageWrap>
  );
};
