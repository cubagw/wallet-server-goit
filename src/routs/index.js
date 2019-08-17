const express = require('express');
const costs = require('./costs');

const app = express();

app.use('/costs.js', costs);
module.exports = app;
