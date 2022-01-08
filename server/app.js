const express = require('express');
const taxiRouter = require('./routers/taxi');
const bodyParser = require('body-parser');

const app = express();

//router
app.use(express.json());
app.use(bodyParser.json());
app.use(taxiRouter);

module.exports = app;