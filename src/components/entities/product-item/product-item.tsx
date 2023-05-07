import { FC } from 'react';
import { Text } from '../../ui';
import * as S from './product-item.styles';
import { ProductItemProps } from './product-item.types';
import { observer } from 'mobx-react-lite';
import { BiEdit } from 'react-icons/bi';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';
import { ProductForm } from '../../forms/product-form';
import { SpecificationContainer } from './specification-container';
import { userService } from '../../../services/user';
import { EmployeeRoleEnum } from '../../../interfaces';

export const ProductItem: FC<ProductItemProps> = observer(({ product }) => {
  const { isModalOpen, hideModal, showModal } = useModal();
  return (
    <S.ProductItem>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <ProductForm hideModal={hideModal} product={product} />
      </Modal>
      {userService.user$?.role === EmployeeRoleEnum.TECHNOLOGIST && (
        <S.IconWrap>
          <BiEdit size={20} cursor="pointer" onClick={showModal} />
        </S.IconWrap>
      )}
      <Text type="header" bold center>
        {product.name}
      </Text>
      <SpecificationContainer product={product} />
    </S.ProductItem>
  );
});
