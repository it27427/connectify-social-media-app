import { validateRequest } from '@/auth';
import { redirect } from 'next/navigation';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await validateRequest();

  if (!session.user) redirect('/sign-in');

  return <>{children}</>;
};

export default MainLayout;
