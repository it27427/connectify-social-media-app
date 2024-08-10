'user server';

import prisma from '@/lib/prisma';
import { signInSchema, SignInValues } from '@/lib/validation';
import { isRedirectError } from 'next/dist/client/components/redirect';
import { verify } from '@node-rs/argon2';

export async function signIn(
  credentials: SignInValues
): Promise<{ error: string }> {
  try {
    const { username, password } = signInSchema.parse(credentials);
    const existingUser = await prisma.user.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });

    if (!existingUser || !existingUser.passwordHash) {
      return {
        error: 'Incorrect email or password.',
      };
    }

    const validPassword = await verify(existingUser.passwordHash, password);
  } catch (error) {
    if (isRedirectError(error)) throw error;
    console.error(error);
    return {
      error: 'Something went wrong! Please try again.',
    };
  }
}
