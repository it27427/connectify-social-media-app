'use server';

import { signUpSchema, SignUpValues } from '@/lib/validation';
import { hash } from '@node-rs/argon2';

export async function signUp(
  credentials: SignUpValues
): Promise<{ error: string }> {
  try {
    const { username, email, password } = signUpSchema.parse(credentials);
    const passwordHash = await hash();
  } catch (error) {
    console.error(error);
    return {
      error: 'Something went wrong! Please try again.',
    };
  }
}
