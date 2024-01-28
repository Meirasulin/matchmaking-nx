import {
  privateProcedure,
  publicProcedure,
  router,
} from '../../trpcServer/initTRPC';
import { z } from 'zod';
import { createMatch, getInitMatchCards } from '../dal/matchingDal';
import { createMatchVlidetion } from '../utils/inputValidetion';

export const matchingRouter = router({
  getAllInitMatchingCards: privateProcedure
    .input(z.enum(['male', 'female']))
    .query(async (ops) => {
      try {
        const res = await getInitMatchCards(ops.input);
        if (!res) throw new Error('error in geting first natch info');
        return res;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }),
  createMatch: privateProcedure
    .input(z.object(createMatchVlidetion))
    .mutation(async (ops) => {
      const { asked, asks, asksType, handler } = ops.input;
      try {
        const res = await createMatch({ asked, asks, asksType, handler });
        if (!res) throw Error;
        return res;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }),
});
