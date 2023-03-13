import { FC } from 'react';
import { CloseIconProps } from './close-icon.types';

export const CloseIcon: FC<CloseIconProps> = ({ Svg, onClick }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#1d1d1f"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2px"
      onClick={onClick}
    >
      <svg />
      <line x1="7" x2="25" y1="7" y2="25" />
      <line x1="7" x2="25" y1="25" y2="7" />
    </Svg>
  );
};
