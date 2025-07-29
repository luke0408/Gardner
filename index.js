import express from 'express'
import { tempRounter } from './src/routes/temp.route';
import { status } from './config/response.status';

const app = express()
const port = 3000

const logger = (req, res, next) => {
  console.log('LOGGED');
  next();
};

app.use(logger);

app.use('/temp', tempRounter);

app.use((req, res, next) => {
  const err = new BaseError(status.NOT_FOUND);
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(500).send(err.stack);
});

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});