import { matchmakersRouter } from "../matchmaker/router/matchmakerRouter";
import { router } from "../trpcServer/initTRPC";

const appRouter = router({
  matchmaker: matchmakersRouter /*fix all routers*/,
  // matched: usersRouter /*fix all routers*/,
});

export default appRouter;
export type AppRouter = typeof appRouter;
