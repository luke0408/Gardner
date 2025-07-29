import express from 'express'

const app = express()
const port = 3000

const logger = (req, res, next) => {
  console.log('LOGGED');
  next();
};

app.use(logger);

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});