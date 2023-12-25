import { publicProcedure, router } from "../../trpcServer/initTRPC";
import { z } from "zod";
import { randomUUID } from "crypto";

export const matchmakersRouter = router({
  signup: publicProcedure.input(z.string()).query(()=>{})
  // login: publicProcedure
  //   .input(z.object({ name: z.string(), age: z.number() }))
  //   .mutation((req) => {
  //     const { name, age } = req.input;
  //     const user: User = { id: randomUUID(), name, age };
  //     USERS.push(user);
  //     return user;
  //   }),
});
