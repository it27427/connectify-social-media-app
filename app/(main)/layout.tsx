import { validateRequest } from '@/auth';
import { redirect } from 'next/navigation';
import SessionProvider from './SessionProvider';
import Header from '@/components/Header';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await validateRequest();

  if (!session.user) redirect('/sign-in');

  return (
    <SessionProvider value={session}>
      <Header />
      <main className='flex flex-col min-h-screen'>{children}</main>
    </SessionProvider>
  );
};

export default MainLayout;
