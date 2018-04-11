const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.plugin(require('./lib/globalToJSON'));
mongoose.plugin(require('mongoose-unique-validator'));

const { port, dbURI, env } = require('./config/environment');
const routes = require('./config/routes');
const customResponses = require('./lib/customResponses');
const errorHandler = require('./lib/errorHandler');

mongoose.connect(dbURI, { useMongoClient: true });

app.use(express.static(`${__dirname}/public`));

app.use(customResponses);

app.use('/', routes);

app.use(errorHandler);

server.listen(port, () => console.log(`Express is listening on port ${port}`));

module.exports = app;
