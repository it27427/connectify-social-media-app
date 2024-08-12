'use client';
import { SignUpValues } from '@/lib/validation';
import { useForm } from 'react-hook-form';

const SignUpForm = () => {
  const form = useForm<SignUpValues>({});

  return (
    <div>
      <h2>SignUpForm</h2>
    </div>
  );
};

export default SignUpForm;
