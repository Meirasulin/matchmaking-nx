import { initTRPC } from '@trpc/server';
import { AppRouter } from '../router/appRouter';

const initTrpc = initTRPC.create();


export default initTrpc;
export const router = initTrpc.router;
export const middleware = initTrpc.middleware
export const publicProcedure = initTrpc.procedure;
