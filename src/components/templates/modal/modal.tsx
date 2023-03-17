import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import { CloseIcon } from '../../ui/icons';
import * as S from './modal.styles';
import { ModalProps } from './modal.types';

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, isModalOpen, hideModal }) => {
  return isModalOpen
    ? createPortal(
        <S.Background onClick={hideModal}>
          <S.Modal onClick={(event) => event.stopPropagation()}>
            <S.ModalContent>
              <CloseIcon Svg={S.CloseButton} onClick={hideModal} />
              {children}
            </S.ModalContent>
          </S.Modal>
        </S.Background>,
        document.body
      )
    : null;
};
