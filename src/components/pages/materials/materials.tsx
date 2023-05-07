import { FC, useEffect, useState } from 'react';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';
import { Table } from '../../templates/table';
import { MaterialForm } from '../../forms/material-form';
import { Loader, PageWrap } from '../../ui';
import { MATERIALS_HEADER } from './materials.constants';
import { materialTableAdapter } from './materials.adapter';
import { materialService } from '../../../services/material';
import { EmployeeRoleEnum } from '../../../interfaces';
import { userService } from '../../../services/user';

export const Materials: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isModalOpen, hideModal, selectedItemId, onTableIconClick } = useModal();

  useEffect(() => {
    materialService.getMaterials().finally(() => setIsLoading(false));
  }, []);

  return (
    <PageWrap>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <MaterialForm
          hideModal={hideModal}
          material={materialService.materials$.find((material) => material.id === selectedItemId)}
        />
      </Modal>
      {isLoading && <Loader />}
      <Table
        header={MATERIALS_HEADER}
        body={materialTableAdapter(materialService.materials$)}
        onIconClick={onTableIconClick}
        hasRights={userService.user$?.role === EmployeeRoleEnum.TECHNOLOGIST}
      />
    </PageWrap>
  );
};
