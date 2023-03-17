import { SVGProps, ReactElement } from 'react';

export interface DeleteIconProps {
  Svg: (props: SVGProps<SVGElement>) => ReactElement;
  onClick?: () => void;
}
