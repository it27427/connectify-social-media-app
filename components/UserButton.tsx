'use client';
import { useSession } from '@/app/(main)/SessionProvider';
import React from 'react';

interface UserButtonProps {
  className?: string;
}

const UserButton = ({ className }: UserButtonProps) => {
  const {} = useSession();

  return <div>UserButton</div>;
};

export default UserButton;
