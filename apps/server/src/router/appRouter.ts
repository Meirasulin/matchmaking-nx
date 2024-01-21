import femaleRouter from '../female/router/femaleRouter';
import { matchingRouter } from '../matching/router/matchingRouter';
import { matchmakersRouter } from '../matchmaker/router/matchmakerRouter';
import { router } from '../trpcServer/initTRPC';

// interface Context {
//   // user is nullable
//   user?: {
//     id: string;
//   };
// }
const appRouter = router({
  matchmaker: matchmakersRouter /*fix all routers*/,
  female: femaleRouter,
  matching: matchingRouter
})

export default appRouter;
export type AppRouter = typeof appRouter;