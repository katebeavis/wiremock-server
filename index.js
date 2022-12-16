import express from 'express';
import http from 'http';
import nocache from 'nocache';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

process.title = 'wiremock-server';

app.use(nocache());

app.use('/', routes);
const createServer = (app) => http.createServer(app);

createServer(app).listen(port, () => {
  if (process.env.NODE_ENV !== 'test')
    console.log(
      'Wiremock server',
      '\x1b[36m',
      'Server running at' + '\x1b[32m',
      'http://localhost:' + port
    );
});
