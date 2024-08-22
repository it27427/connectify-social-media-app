import { validateRequest } from '@/auth';
import { redirect } from 'next/navigation';
import SessionProvider from './SessionProvider';
import Header from '@/components/Header';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await validateRequest();

  if (!session.user) redirect('/sign-in');

  return (
    <SessionProvider value={session}>
      <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='max-w-7xl mx-auto p-5'>{children}</main>
      </div>
    </SessionProvider>
  );
};

export default MainLayout;
