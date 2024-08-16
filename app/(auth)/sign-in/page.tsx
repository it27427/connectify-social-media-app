import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
};

export default function page() {
  return (
    <main className='flex items-center justify-center h-screen'>
      <h2>Sign In Page</h2>
    </main>
  );
}
