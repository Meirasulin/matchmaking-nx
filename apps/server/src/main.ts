import 'dotenv/config';
import cors from 'cors';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import appRouter from './router/appRouter';
import connectToPG from './db/postgresConnection';
import { createContext } from './trpcServer/initTRPC';




const httpServer = createHTTPServer({
  router: appRouter,
  middleware: cors(),
  createContext,
});

httpServer.listen(3000);
httpServer.server.on('listening', () => {
  console.log('Server is listening on port 3000');
  connectToPG()
    .then(() => {
      console.log('Connection has been established successfully.');
      // createMatchmakersTable()
    })
    .catch((error) =>
      console.error('Unable to connect to the database:', error)
    );
});
httpServer.server.on('error', (error) => {
  console.error('Unable to start the server:', error);
});
