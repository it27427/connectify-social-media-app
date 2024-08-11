import { Metadata } from 'next';
import signUpThumbnail from '@/assets/images/signup.jpg';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sign Up',
};

export default function page() {
  return (
    <main className='flex items-center justify-center h-screen'>
      <div className='flex h-full max-h-[40rem] w-full max-w-[64rem] rounded-2xl shadow-2xl overflow-hidden bg-card'>
        <div className='md:w-1/2 w-full space-y-10 overflow-y-auto p-10'>
          <h2>Sign Up Form</h2>
        </div>

        <Image
          src={signUpThumbnail}
          alt='SignUp-Thumbnail'
          width={1000}
          height={1000}
          priority
          className='w-1/2 hidden md:block object-cover'
        />
      </div>
    </main>
  );
}
