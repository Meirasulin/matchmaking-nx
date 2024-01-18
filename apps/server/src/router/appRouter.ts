import femaleRouter from '../female/router/femaleRouter';
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
  female: femaleRouter
})

export default appRouter;
export type AppRouter = typeof appRouter;