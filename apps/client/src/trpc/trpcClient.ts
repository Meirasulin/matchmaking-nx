import { createTRPCProxyClient, httpBatchLink } from '@trpc/react-query';
import type { AppRouter } from '../../../server/src/router/appRouter';

const tRPC = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
      headers() {
        return {
          Authorization: String(localStorage.getItem("TOKEN"))
        }
      }
    }),
    
  ],
  transformer: undefined,
});

export default tRPC;
