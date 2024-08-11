import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
};

export default function page() {
  return (
    <main className='flex items-center justify-center h-screen'>
      <h2>Sign Up Page</h2>
    </main>
  );
}
