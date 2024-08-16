'use client';
import { signInSchema, SignInValues } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';

const SignInForm = () => {
  const [error, setError] = useState<string>();
  const [isPending, startTransition] = useTransition();

  const form = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  return (
    <div>
      <h1>SignInForm</h1>
    </div>
  );
};

export default SignInForm;
