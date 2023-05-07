import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import * as S from './product-order-tabs.styles';
import { RouteNames } from '../../templates/router/router.types';
import { userService } from '../../../services/user';
import { observer } from 'mobx-react-lite';
import { PageHeader, PageWrap, Text } from '../../ui';
import { EmployeeRoleEnum } from '../../../interfaces';
import { CgAddR } from 'react-icons/cg';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';
import { ProductOrderForm } from '../../forms/product-order-form';

export const ProductOrderTabs: FC = observer(() => {
  const { isModalOpen, hideModal, showModal } = useModal();
  const { pathname } = useLocation();

  return (
    <PageWrap>
      <PageHeader>
        <Text type="title" bold center>
          Производственные заказы
        </Text>
        {userService.user$?.role === EmployeeRoleEnum.DISPATCHER && (
          <div>
            <CgAddR size={20} cursor="pointer" onClick={showModal} />
          </div>
        )}
      </PageHeader>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <ProductOrderForm hideModal={hideModal} />
      </Modal>
      <S.TabsWrap>
        <S.StyledLink
          to={RouteNames.PRODUCT_ORDERS}
          active={pathname === RouteNames.PRODUCT_ORDERS}
        >
          Текущие
        </S.StyledLink>
        <S.StyledLink
          to={RouteNames.PRODUCT_ORDERS_ARCHIVE}
          active={pathname === RouteNames.PRODUCT_ORDERS_ARCHIVE}
        >
          Архив
        </S.StyledLink>
      </S.TabsWrap>
      <Outlet />
    </PageWrap>
  );
});
