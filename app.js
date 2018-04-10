const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.plugin(require('./lib/globalToJSON'));
mongoose.plugin(require('mongoose-unique-validator'));

module.exports = app;
