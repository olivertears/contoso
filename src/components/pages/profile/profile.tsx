import { FC } from 'react';
import { Divider, Header, PageWrap, Title } from '../../ui';
import { EmployeeRoleEnum } from '../../../interfaces';
import { ChangePasswordForm } from '../../forms/change-password-form';
import { EMPLOYEE_ROLE_VALUES } from '../../../constants';
import { userService } from '../../../services/user';

export const Profile: FC = () => {
  return (
    <PageWrap>
      <Title>
        {userService.user$?.lastName} {userService.user$?.firstName} {userService.user$?.middleName}
      </Title>
      <Header>
        Должность:{' '}
        {userService.user$?.role === EmployeeRoleEnum.ADMIN
          ? 'Администратор'
          : userService.user$ && EMPLOYEE_ROLE_VALUES[userService.user$.role]}
      </Header>
      <Header>Почта: {userService.user$?.email}</Header>
      <Divider />
      <ChangePasswordForm />
    </PageWrap>
  );
};
