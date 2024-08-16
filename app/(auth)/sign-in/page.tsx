import { Metadata } from 'next';
import Image from 'next/image';
import signInThumbnail from '@/assets/images/signin.jpg';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign In',
};

export default function page() {
  return (
    <main className='flex items-center justify-center h-screen'>
      <div className='flex h-full max-h-[40rem] w-full max-w-[64rem] rounded-2xl shadow-2xl overflow-hidden bg-card'>
        <div className='md:w-1/2 w-full space-y-10 overflow-y-auto p-10'>
          <h1 className='text-3xl font-bold text-center'>
            Sign in to Connectify
          </h1>

          <div className='space-y-5'>
            {/* <SignInForm /> */}

            <p className='text-center'>
              Don't have any account?{' '}
              <Link href='/sign-up' className='hover:underline'>
                Sign Up
              </Link>
            </p>
          </div>
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
