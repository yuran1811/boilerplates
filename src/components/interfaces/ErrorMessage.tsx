import { DivProps } from '@shared/types';
import { FC } from 'react';

export const ErrorMessage: FC<DivProps> = ({ className, children }) => (
  <div className={`text-rose-600 text-center font-semibold ${className || ''}`}>{children}</div>
);
