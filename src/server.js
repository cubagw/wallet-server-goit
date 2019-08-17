const express = require('express');
const routs = require('./routs');

const app = express();

app.use(routs);

/*
 * USE
 */
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json('ERROR');
});

module.exports = app;
