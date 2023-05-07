import { FC } from 'react';
import { Divider, PageWrap, Text } from '../../ui';
import { EmployeeRoleEnum } from '../../../interfaces';
import { ChangePasswordForm } from '../../forms/change-password-form';
import { EMPLOYEE_ROLE_VALUES } from '../../../constants';
import { userService } from '../../../services/user';

export const Profile: FC = () => {
  return (
    <PageWrap>
      <Text type="title">
        {userService.user$?.lastName} {userService.user$?.firstName} {userService.user$?.middleName}
      </Text>
      <Text type="info" bold>
        {userService.user$?.role === EmployeeRoleEnum.ADMIN
          ? 'Администратор'
          : userService.user$ && EMPLOYEE_ROLE_VALUES[userService.user$.role]}
      </Text>
      <Divider />
      <ChangePasswordForm />
    </PageWrap>
  );
};
