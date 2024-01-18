import { errorUtil } from 'zod/lib/helpers/errorUtil';
import { publicProcedure, router } from '../../trpcServer/initTRPC';
import { getAllMalefirstMatch } from '../dal/femaleDal';

const femaleRouter = router({
  getAllMaleFirstMatch: publicProcedure.query(async () => {
    try {
      const males = await getAllMalefirstMatch();
      if (!males) throw new Error('unable to get all males for first match');
    return males
    } catch (error) {
      throw error;
    }
  }),
});

export default femaleRouter;
