import React, { useState } from 'react';
import { Input } from './ui/input';

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className='relative'>
        <Input type={showPassword ? 'text' : 'password'} />
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
