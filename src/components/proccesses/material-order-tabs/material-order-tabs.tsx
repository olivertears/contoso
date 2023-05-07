import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import * as S from './material-order-tabs.styles';
import { RouteNames } from '../../templates/router/router.types';
import { userService } from '../../../services/user';
import { observer } from 'mobx-react-lite';
import { PageHeader, PageWrap, Text } from '../../ui';
import { EmployeeRoleEnum } from '../../../interfaces';
import { CgAddR } from 'react-icons/cg';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';
import { MaterialOrderForm } from '../../forms/material-order-form';

export const MaterialOrderTabs: FC = observer(() => {
  const { isModalOpen, hideModal, showModal } = useModal();
  const { pathname } = useLocation();

  return (
    <PageWrap>
      <PageHeader>
        <Text type="title" bold center>
          Заказы ТМЦ
        </Text>
        {[
          EmployeeRoleEnum.ASSEMBLY,
          EmployeeRoleEnum.PAINTING,
          EmployeeRoleEnum.PACKAGING
        ].includes(userService.user$?.role as EmployeeRoleEnum) && (
          <div>
            <CgAddR size={20} cursor="pointer" onClick={showModal} />
          </div>
        )}
      </PageHeader>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <MaterialOrderForm hideModal={hideModal} />
      </Modal>
      <S.TabsWrap>
        <S.StyledLink
          to={RouteNames.MATERIAL_ORDERS}
          active={pathname === RouteNames.MATERIAL_ORDERS}
        >
          Текущие
        </S.StyledLink>
        <S.StyledLink
          to={RouteNames.MATERIAL_ORDERS_ARCHIVE}
          active={pathname === RouteNames.MATERIAL_ORDERS_ARCHIVE}
        >
          Архив
        </S.StyledLink>
      </S.TabsWrap>
      <Outlet />
    </PageWrap>
  );
});
