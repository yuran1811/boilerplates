import { DivProps } from '@shared/types';
import { FC } from 'react';

export const ErrorText: FC<DivProps> = ({ className, children }) => (
  <div className={`text-white text-center font-bold ${className || ''}`}>{children}</div>
);
