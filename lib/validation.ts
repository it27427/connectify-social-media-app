import { z } from 'zod';

const requiredString = z.string().trim().min(1, 'This field is required.');

export const signUpSchema = z.object({
  email: requiredString.email('Invalid email address'),
});
