import { FC, PropsWithChildren } from 'react';
import * as S from './modal.styles';
import { CloseIcon } from '../../ui/icons';
import { ModalProps } from './modal.types';
import { createPortal } from 'react-dom';

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, isModalOpen, hideModal }) => {
  return isModalOpen
    ? createPortal(
        <S.Background onClick={hideModal}>
          <S.Modal onClick={(event) => event.stopPropagation()}>
            <CloseIcon Svg={S.CloseButton} onClick={hideModal} />
            {children}
          </S.Modal>
        </S.Background>,
        document.body
      )
    : null;
};
