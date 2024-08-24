'use client';
import { useSession } from '@/app/(main)/SessionProvider';
import React from 'react';
import { DropdownMenu } from './ui/dropdown-menu';

interface UserButtonProps {
  className?: string;
}

const UserButton = ({ className }: UserButtonProps) => {
  const { user } = useSession();

  return (
    <>
      <DropdownMenu></DropdownMenu>
    </>
  );
};

export default UserButton;
