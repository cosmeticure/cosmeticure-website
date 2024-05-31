import { z, ZodType } from 'zod';
import { ContactFormType } from '@/type';

export const ContactSchema: ZodType<ContactFormType> = z
  .object({
    firstName: z.string().min(2).max(32),
    lastName: z.string().min(2).max(32),
    email: z.string().email(),
    message: z.string().min(10).max(300),
  });
