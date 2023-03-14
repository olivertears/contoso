import { SVGProps, ReactElement } from 'react';

export interface EditIconProps {
  Svg: (props: SVGProps<SVGElement>) => ReactElement;
  onClick?: () => void;
}
