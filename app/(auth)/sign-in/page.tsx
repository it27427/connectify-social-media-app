import { Metadata } from 'next';
import Image from 'next/image';
import signInThumbnail from '@/assets/images/signin.jpg';

export const metadata: Metadata = {
  title: 'Sign In',
};

export default function page() {
  return (
    <main className='flex items-center justify-center h-screen'>
      <div className='flex h-full max-h-[40rem] w-full max-w-[64rem] rounded-2xl shadow-2xl overflow-hidden bg-card'>
        <div className='md:w-1/2 w-full space-y-10 overflow-y-auto p-10'>
          <h1 className='text-3xl font-bold'>Sign in to Connectify</h1>
        </div>

        <Image
          src={signInThumbnail}
          alt='SignIn-Thumbnail'
          width={1000}
          height={1000}
          priority
          className='w-1/2 hidden md:block object-cover'
        />
      </div>
    </main>
  );
}
