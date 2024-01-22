import { privateProcedure, publicProcedure, router } from '../../trpcServer/initTRPC';
import { z } from 'zod';
import { getInitMatchCards } from '../dal/matchingDal';

export const matchingRouter = router({
  getAllInitMatchingCards: privateProcedure
    .input(z.enum(['male', 'female']))
    .query(async (ops) => {
      try {
        const res = await getInitMatchCards(ops.input);
        if (!res) throw new Error ('error in geting first natch info')
        return res;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }),

});
