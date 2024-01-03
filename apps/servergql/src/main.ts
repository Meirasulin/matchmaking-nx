import express from 'express';
import postgraphile from 'postgraphile';
import 'dotenv/config';

const app = express();
app.use(
  postgraphile(process.env.LOCAL_PG, 'matching', {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    jwtSecret: 'secret-jwt-matchmakers-web_1221-@#%&',
    jwtPgTypeIdentifier: 'matching.user_login_info',
  })
);

app.listen(3000, () => {
  console.log('server postgraphile runing on port 3000');
});
