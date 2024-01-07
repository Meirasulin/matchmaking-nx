import { initTRPC } from '@trpc/server';

const initTrpc = initTRPC.create();





export default initTrpc;
export const router = initTrpc.router;
export const publicProcedure = initTrpc.procedure;
