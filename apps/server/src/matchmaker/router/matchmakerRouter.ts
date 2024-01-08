import { publicProcedure, router } from '../../trpcServer/initTRPC';
import { z } from 'zod';
import { MatchmakerValidetion } from '../utils/matchmakerValidetion';
import { matchmakersSignUp, matchmakersLogin } from '../dal/matchmakersDAL';
import { LoginMatchmakerType, MatchmakerType } from '../types/matchmakerType';
import { hash } from 'bcrypt';
// import { randomUUID } from "crypto";

export const matchmakersRouter = router({
  signup: publicProcedure
    .input(z.object(MatchmakerValidetion))
    .mutation(async (ops) => {
      ops.input.password = await hash(ops.input.password as string, 10);
      matchmakersSignUp(ops.input as MatchmakerType);
    }),
  login: publicProcedure
    .input(z.object({ password: z.string(), email: z.string() }))
    .query(async (ops) => {
      const matchmakers = await matchmakersLogin(
        ops.input as LoginMatchmakerType
      );
      return matchmakers;
    }),
});

// login: publicProcedure
//   .input(z.object({ name: z.string(), age: z.number() }))
//   .mutation((req) => {
//     const { name, age } = req.input;
//     const user: User = { id: randomUUID(), name, age };
//     USERS.push(user);
//     return user;
//   }),
