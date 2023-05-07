import { FC, useEffect, useState } from 'react';
import { useModal } from '../../../hooks';
import { Modal } from '../../templates/modal';
import { ProductForm } from '../../forms/product-form';
import { Loader, PageHeader, PageWrap, Text } from '../../ui';
import { productService } from '../../../services/product';
import { ProductItem } from '../../entities/product-item';
import { specificationService } from '../../../services/specification';
import { materialService } from '../../../services/material';
import { observer } from 'mobx-react-lite';
import { CgAddR } from 'react-icons/cg';
import { userService } from '../../../services/user';
import { EmployeeRoleEnum } from '../../../interfaces';

export const Products: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);
  const { isModalOpen, hideModal, showModal } = useModal();

  useEffect(() => {
    fetchData().finally(() => setIsLoading(false));
  }, []);

  const fetchData = async () => {
    await productService.getProducts();
    await specificationService.getSpecifications();
    await materialService.getMaterials();
  };

  return (
    <PageWrap>
      <Modal isModalOpen={isModalOpen} hideModal={hideModal}>
        <ProductForm hideModal={hideModal} />
      </Modal>
      {isLoading && <Loader />}

      <PageHeader>
        <Text type="title" bold center>
          Продукты
        </Text>
        {userService.user$?.role === EmployeeRoleEnum.TECHNOLOGIST && (
          <div>
            <CgAddR size={20} cursor="pointer" onClick={showModal} />
          </div>
        )}
      </PageHeader>

      {productService.products$.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </PageWrap>
  );
});
