import { FC } from 'react';
import { AddIconProps } from './add-icon.types';

export const AddIcon: FC<AddIconProps> = ({ Svg, onClick }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 34"
      fill="none"
      stroke="#dadada"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      cursor="pointer"
      onClick={onClick}
    >
      <path d="M17 2V32M2 17H32" />
    </Svg>
  );
};
