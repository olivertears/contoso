import { FC, useEffect, useMemo, useState } from 'react';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';
import { Table } from '../../templates/table';
import { EmployeeForm } from '../../forms/employee-form';
import { Loader, PageWrap, Search, TableBody, TableHeader } from '../../ui';
import { EMPLOYEES_HEADER } from './employees.constants';
import { employeeTableAdapter } from './employees.adapter';
import { employeeService } from '../../../services/employee';
import { observer } from 'mobx-react-lite';
import { EmployeeRoleEnum } from '../../../interfaces';
import { userService } from '../../../services/user';

export const Employees: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const { isModalOpen, hideModal, selectedItemId, onTableIconClick } = useModal();

  useEffect(() => {
    employeeService.getEmployees().finally(() => setIsLoading(false));
  }, []);

  const FILTERED_EMPLOYEES = useMemo(
    () =>
      employeeService.employees$.filter((employee) =>
        [employee.lastName, employee.firstName, employee.middleName]
          .join(' ')
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    [search, employeeService.employees$]
  );

  return (
    <PageWrap padding="0">
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <EmployeeForm
          employee={employeeService.employees$.find((employee) => employee.id === selectedItemId)}
          hideModal={hideModal}
        />
      </Modal>
      {isLoading && <Loader />}
      <TableHeader>
        <Search setSearch={setSearch} />
      </TableHeader>
      <TableBody>
        <Table
          header={EMPLOYEES_HEADER}
          body={employeeTableAdapter(FILTERED_EMPLOYEES)}
          onIconClick={onTableIconClick}
          hasRights={userService.user$?.role === EmployeeRoleEnum.ADMIN}
        />
      </TableBody>
    </PageWrap>
  );
});
