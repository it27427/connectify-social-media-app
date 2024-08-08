'use server';

import { SignUpValues } from '@/lib/validation';

export async function signUp(
  credentials: SignUpValues
): Promise<{ error: string }> {}
