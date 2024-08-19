import { validateRequest } from '@/auth';
import { redirect } from 'next/navigation';
import SessionProvider from './SessionProvider';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await validateRequest();

  if (!session.user) redirect('/sign-in');

  return <SessionProvider value={session}>{children}</SessionProvider>;
};

export default MainLayout;
