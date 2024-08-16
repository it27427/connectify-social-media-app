import React, { useState } from 'react';
import { Input, InputProps } from './ui/input';
import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className='relative'>
        <Input
          type={showPassword ? 'text' : 'password'}
          className={cn('pe-0', className)}
          ref={ref}
          {...props}
        />
        <button
          type='button'
          onClick={() => setShowPassword(!showPassword)}
          title={showPassword ? 'Hide password' : 'Show password'}
          className='absolute top-1/2 -translate-y-1/2 right-3 transform text-muted-foreground'
        >
          {showPassword ? (
            <EyeOff className='size-5' />
          ) : (
            <Eye className='size-5' />
          )}
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
