import { FC, useState } from 'react';
import { Text } from '../../ui';
import * as S from './specification-item.styles';
import { SpecificationItemProps } from './specification-item.types';
import { observer } from 'mobx-react-lite';
import { TbInfoSquare } from 'react-icons/tb';
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { materialService } from '../../../services/material';
import { OPERATION_NAME_VALUES } from '../../../constants';
import { specificationService } from '../../../services/specification';
import { userService } from '../../../services/user';
import { EmployeeRoleEnum } from '../../../interfaces';

export const SpecificationItem: FC<SpecificationItemProps> = observer(({ specification }) => {
  const [isInfoOpen, setInfoOpen] = useState(false);

  const setActive = () => {
    specificationService.updateSpecification(specification.id, specification.itemId, true);
  };

  return (
    <S.SpecificationItem>
      <S.SpecificationHeader>
        <Text type="text" bold>
          {specification.name}
        </Text>
        <S.IconWrap top="10px">
          {specification.active && <S.ActiveText>active</S.ActiveText>}
          <TbInfoSquare size={20} cursor="pointer" onClick={() => setInfoOpen(!isInfoOpen)} />
          {userService.user$?.role === EmployeeRoleEnum.TECHNOLOGIST &&
            (specification.active ? (
              <MdOutlineCheckBox size={20} cursor="pointer" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank size={20} cursor="pointer" onClick={setActive} />
            ))}
        </S.IconWrap>
      </S.SpecificationHeader>

      {isInfoOpen && (
        <S.SpecificationInfo>
          <Text>
            <b>Начало действия: </b>
            {specification.startDate}
          </Text>
          <Text>
            <b>Окончания действия: </b>
            {specification.endDate}
          </Text>
          <Text type="text" bold margin="10px 0 0">
            Материалы
          </Text>
          {specification.materials.map(({ itemId, quantity }) => (
            <Text key={itemId}>
              ·{' '}
              {materialService.materials$.find(({ id }) => id === itemId)?.name + ' - ' + quantity}
            </Text>
          ))}
          <Text type="text" bold margin="10px 0 0">
            Операции
          </Text>
          {specification.operations.map(({ name, time }, index) => (
            <Text key={index}>
              {++index}. {OPERATION_NAME_VALUES[name]} - {time}
            </Text>
          ))}
        </S.SpecificationInfo>
      )}
    </S.SpecificationItem>
  );
});
