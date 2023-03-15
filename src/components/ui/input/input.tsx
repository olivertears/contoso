import { FC, forwardRef } from 'react';
import * as S from './input.styles';
import { InputProps } from './input.types';

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ label, value, error, ...props }, ref) => {
    return (
      <S.Wrap>
        <S.Input {...props} ref={ref} isError={!!error} id={label} />
        <S.Label isError={!!error} isEmpty={!!value} htmlFor={label}>
          {label}
        </S.Label>
        {!!error && <S.Error>{error}</S.Error>}
      </S.Wrap>
    );
  }
);

Input.displayName = 'Input';
