import { TRPCError, initTRPC } from '@trpc/server';
import { AppRouter } from '../router/appRouter';
import { CreateContextOptions } from 'vm';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { verified } from '../utils/verifiedToken';


export const createContext = (_ops: CreateNextContextOptions) => {
  const { req, res } = _ops;
  return { req, res };
};
const initTrpc = initTRPC.context<typeof createContext>().create();

export default initTrpc;

export const verifiedToken = initTrpc.middleware(verified);

export const privateProcedure = initTrpc.procedure.use(verifiedToken);
export const router = initTrpc.router;
export const publicProcedure = initTrpc.procedure;
