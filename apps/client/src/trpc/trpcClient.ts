import { createTRPCProxyClient, httpBatchLink } from '@trpc/react-query';
// eslint-disable-next-line @nx/enforce-module-boundaries
import type { AppRouter } from '../../../server/src/router/appRouter';

const tRPC = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
  transformer: undefined,
});

export default tRPC;
