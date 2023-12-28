import { z } from 'zod';

export const MatchmakerValidetion = {
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  gender: z.string(),
  password: z.string(),
  birthDate: z.string(),
  phoneNumber: z.string(),
  credential: z.string().optional(),
  specialization: z.string(),
};
