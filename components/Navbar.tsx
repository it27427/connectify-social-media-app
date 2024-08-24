import Link from 'next/link';
import React from 'react';
import UserButton from './UserButton';

const Navbar = () => {
  return (
    <nav className='max-w-7xl mx-auto flex items-center justify-center flex-wrap px-5 py-3'>
      <Link href={'/'} className='text-primary text-2xl font-bold'>
        Connectify
      </Link>

      <UserButton />
    </nav>
  );
};

export default Navbar;
