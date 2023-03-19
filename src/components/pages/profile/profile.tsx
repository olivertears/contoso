import { FC } from 'react';
import { Divider, Header, PageWrap, Title } from '../../ui';
import { EmployeeRoleEnum, IEmployee } from '../../../interfaces';
import { ChangePasswordForm } from '../../forms';
import { EMPLOYEE_ROLE_VALUES } from '../../../constants';
import { employeeService } from '../../../services/employee';

export const Profile: FC = () => {
  const employee: IEmployee = {
    firstName: 'Елизавета',
    lastName: 'Подольская',
    middleName: 'Александровна',
    email: 'lizka@gmail.com'
  } as IEmployee;
  return (
    <PageWrap>
      <Title>
        {employee.lastName} {employee.firstName} {employee.middleName}
      </Title>
      <Header>
        Должность:{' '}
        {employeeService.employee$?.role === EmployeeRoleEnum.ADMIN
          ? 'Администратор'
          : employeeService.employee$ && EMPLOYEE_ROLE_VALUES[employeeService.employee$.role]}
      </Header>
      <Header>Почта: {employee.email}</Header>
      <Divider />
      <ChangePasswordForm />
    </PageWrap>
  );
};
