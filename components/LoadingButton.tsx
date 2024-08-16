import React from 'react';
import { Button, ButtonProps } from './ui/button';
import { cn } from '@/lib/utils';

interface LoadingButtonProps extends ButtonProps {
  loading: boolean;
}

const LoadingButton = ({
  loading,
  disabled,
  className,
  ...props
}: LoadingButtonProps) => {
  return (
    <Button
      type='button'
      disabled={loading || disabled}
      className={cn('flex items-center gap-2', className)}
    >
      LoadingButton
    </Button>
  );
};

export default LoadingButton;
