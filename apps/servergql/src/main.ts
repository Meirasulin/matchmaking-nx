import express from 'express';
import postgraphile from 'postgraphile';
import 'dotenv/config';
import cors from 'cors'

const app = express();

app.use(cors())
app.use(
  postgraphile(process.env.LOCAL_PG, 'matching', {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    jwtSecret: process.env.SECRET_KEY_TOKEN,
    jwtPgTypeIdentifier: 'matching.token',
  })
);

app.listen(4000, () => {
  console.log('server postgraphile runing on port 4000');
});
