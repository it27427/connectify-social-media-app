import { validateRequest } from '@/auth';

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const {} = validateRequest();

  return <>{children}</>;
};

export default AuthLayout;
