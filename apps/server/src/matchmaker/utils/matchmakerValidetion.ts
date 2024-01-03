import { z } from 'zod';

export const MatchmakerValidetion = {
  firstName: z.string().min(2).max(20),
  lastName: z.string().min(2).max(20),
  email: z.string().regex(/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/gi),
  gender: z.string(),
  password: z.string(),
  birthDate: z
    .string()
    .regex(/(0[1-9]|[12][0-9]|3[01])(\/|-)(0[1-9]|1[1,2])(\/|-)(19|20)\d{2}/),
  phoneNumber: z.string(),
  credential: z.string().optional(),
  specialization: z.string(),
};
