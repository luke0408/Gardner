import express from "express";
import { tempRounter } from "./src/routes/temp.route";
import { status } from "./src/config/response.status";
import { githubRounter } from "./src/routes/github.route";

const app = express();
const port = 3000;

const logger = (req, res, next) => {
  console.log("LOGGED");
  next();
};

app.use(logger);

app.use("/api/temp", tempRounter);
app.use("/api/github", githubRounter);

app.use((req, res, next) => {
  const err = new BaseError(status.NOT_FOUND);
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(500).send(err.stack);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
