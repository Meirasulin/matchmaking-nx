import { z } from 'zod';

export const createMatchVlidetion = {
  asks: z.number(),
  asksType: z.enum(['male', 'female']),
  asked: z.number(),
  handler: z.number(),
};
