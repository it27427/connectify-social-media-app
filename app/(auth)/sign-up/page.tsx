import { Metadata } from 'next';
import signUpThumbnail from '@/assets/images/signup.jpg';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Up',
};

export default function page() {
  return (
    <main className='flex items-center justify-center h-screen'>
      <div className='flex h-full max-h-[40rem] w-full max-w-[64rem] rounded-2xl shadow-2xl overflow-hidden bg-card'>
        <div className='md:w-1/2 w-full space-y-10 overflow-y-auto p-10'>
          <hgroup className='space-y-1 text-center'>
            <h1 className='text-3xl font-bold'>Sign up to Connectify</h1>
            <h5 className='text-muted-foreground'>
              A place where even <span className='italic'>you</span> can make a
              friend.
            </h5>
          </hgroup>

          <div className='space-y-5'>
            <h2>Sign up form</h2>

            <p className='text-center'>
              Already have an account?{' '}
              <Link href='/sign-in' className='hover:underline'>
                Sign In
              </Link>
            </p>
          </div>
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
