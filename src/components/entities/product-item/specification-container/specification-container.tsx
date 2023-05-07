import { FC } from 'react';
import { Row, Text } from '../../../ui';
import * as S from './specification-container.styles';
import { ProductItemProps } from './specification-container.types';
import { observer } from 'mobx-react-lite';
import { specificationService } from '../../../../services/specification';
import { SpecificationItem } from '../../specification-item';
import { useModal } from '../../../../hooks';
import { Modal } from '../../../templates/modal';
import { CgAddR } from 'react-icons/cg';
import { SpecificationForm } from '../../../forms/specification-form';
import { userService } from '../../../../services/user';
import { EmployeeRoleEnum } from '../../../../interfaces';

export const SpecificationContainer: FC<ProductItemProps> = observer(({ product }) => {
  const { isModalOpen, hideModal, showModal } = useModal();
  return (
    <S.SpecificationContainer>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <SpecificationForm hideModal={hideModal} product={product} />
      </Modal>
      <S.SpecificationWrap>
        <Row>
          <Text type="info" bold>
            Спецификации
          </Text>
          {userService.user$?.role === EmployeeRoleEnum.TECHNOLOGIST && (
            <S.IconWrap>
              <CgAddR size={20} cursor="pointer" onClick={showModal} />
            </S.IconWrap>
          )}
        </Row>
        {specificationService.specifications$
          .filter(({ itemId }) => itemId === product.id)
          .map((specification) => (
            <SpecificationItem key={specification.id} specification={specification} />
          ))}
      </S.SpecificationWrap>
    </S.SpecificationContainer>
  );
});
