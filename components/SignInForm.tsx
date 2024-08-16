'use client';
import { signIn } from '@/app/(auth)/sign-in/actions';
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

  async function onSubmit(values: SignInValues) {
    setError(undefined);
    startTransition(async () => {
      const { error } = await signIn(values);

      if (error) setError(error);
    });
  }

  return (
    <div>
      <h1>SignInForm</h1>
    </div>
  );
};

export default SignInForm;
