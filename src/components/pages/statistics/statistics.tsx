import { FC, useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Title, Legend, ChartData } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Loader, PageWrap, Text } from '../../ui';
ChartJS.register(ArcElement, Tooltip, Legend, Title);
import { BACKGROUND_COLORS, BORDER_COLORS, OPTIONS } from './statistic.constants';
import * as S from './statistics.styles';
import { observer } from 'mobx-react-lite';
import { productService } from '../../../services/product';
import { productOrderService } from '../../../services/product-order';

export const Statistics: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData().finally(() => setIsLoading(false));
  }, []);

  const fetchData = async () => {
    await productService.getProducts();
    await productOrderService.getProductOrders();
  };

  const ids = productService.products$.map(({ id }) => id);
  const labels = ids.map(
    (id) => productService.products$.find((product) => product.id === id)?.name
  );

  const data: ChartData<'pie'> = {
    labels,
    datasets: [
      {
        label: 'Количество заказов',
        data: productOrderService.productOrders$.reduce((res, order) => {
          const index = ids.findIndex((id) => id === order.itemId);
          res[index] += 1;
          return res;
        }, new Array(ids.length).fill(0)),
        backgroundColor: BACKGROUND_COLORS,
        borderColor: BORDER_COLORS,
        borderWidth: 1,
        hoverBorderWidth: 3
      }
    ]
  };

  return (
    <PageWrap>
      {isLoading && <Loader />}
      <Text type="title" center color="#4242aa" bold>
        Количество заказов каждого из продуктов
      </Text>
      <S.GraphWrap>
        <Pie data={data} options={OPTIONS} />
      </S.GraphWrap>
    </PageWrap>
  );
});
