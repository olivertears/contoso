import { SVGProps, ReactElement } from 'react';

export interface AddIconProps {
  Svg: (props: SVGProps<SVGElement>) => ReactElement;
  onClick?: () => void;
}
