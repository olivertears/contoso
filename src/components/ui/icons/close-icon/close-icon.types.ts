import { SVGProps, ReactElement } from 'react';

export interface CloseIconProps {
  Svg: (props: SVGProps<SVGElement>) => ReactElement;
  onClick?: () => void;
}
