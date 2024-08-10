'user server';

import { signInSchema, SignInValues } from '@/lib/validation';
import { isRedirectError } from 'next/dist/client/components/redirect';

export async function signIn(
  credentials: SignInValues
): Promise<{ error: string }> {
  try {
    const { username, password } = signInSchema.parse(credentials);
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error(error);
    return {
      error: 'Something went wrong! Please try again.',
    };
  }
}
