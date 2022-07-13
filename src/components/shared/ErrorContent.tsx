import { ErrorText } from '@cpns/interfaces';
import { FC } from 'react';

interface ErrorContentProps {
  errorBoundaries?: boolean;
}

export const ErrorContent: FC<ErrorContentProps> = ({ errorBoundaries = false }) => {
  return (
    <div className="p-[5rem]">
      <ErrorText className="text-[7rem] tablet:text-[15rem] mobile:line-clamp-1">Oops!</ErrorText>
      <ErrorText className="text-[4rem] tablet:text-[5rem] line-clamp-3">
        Something went wrong!
      </ErrorText>
    </div>
  );
};
