'user server';

import { SignInValues } from '@/lib/validation';
import { isRedirectError } from 'next/dist/client/components/redirect';

export async function signIn(
  credentials: SignInValues
): Promise<{ error: string }> {
  try {
  } catch (error) {
    if (isRedirectError) {
    }

    console.error(error);
  }
}
