import 'dotenv/config';
import cors from 'cors';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import appRouter from './router/appRouter';
import connectToPG from './db/postgresConnection';
import { createMatchmakersTable } from './matchmaker/model/tableDefinition';

const httpServer = createHTTPServer({
  router: appRouter,
  middleware: cors(),
});

httpServer.listen(3000);
httpServer.server.on('listening', () => {
  console.log('Server is listening on port 3000');
  connectToPG()
    .then(() => {
      console.log('Connection has been established successfully.');
      createMatchmakersTable()
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    })
    .catch((error) =>
      console.error('Unable to connect to the database:', error)
    );
});
httpServer.server.on('error', (error) => {
  console.error('Unable to start the server:', error);
});
