import { FC } from 'react';
import { Divider, Header, PageWrap, Title } from '../../ui';
import { EmployeeRoleEnum, IEmployee } from '../../../interfaces';
import { ChangePasswordForm } from '../../forms/change-password-form';
import { EMPLOYEE_ROLE_VALUES } from '../../../constants';
import { userService } from '../../../services/user';

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
        {userService.user$?.role === EmployeeRoleEnum.ADMIN
          ? 'Администратор'
          : userService.user$ && EMPLOYEE_ROLE_VALUES[userService.user$.role]}
      </Header>
      <Header>Почта: {employee.email}</Header>
      <Divider />
      <ChangePasswordForm />
    </PageWrap>
  );
};
