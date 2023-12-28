import express from 'express';
import postgraphile from 'postgraphile';
import 'dotenv/config';

const app = express();
app.use(
  postgraphile(process.env.LOCAL_PG, 'university', {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
  })
);

app.listen(3000, () => {
  console.log('server postgraphile runing on port 3000');
});
