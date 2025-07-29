import express from 'express'
import { tempRounter } from './src/routes/temp.route';

const app = express()
const port = 3000

const logger = (req, res, next) => {
  console.log('LOGGED');
  next();
};

app.use(logger);

app.use('/temp', tempRounter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.stack);
});

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});