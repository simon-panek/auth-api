'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// Esoteric Resources
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./routes/routesAuth.js');
const v1Routes = require('./routes/v1.js');
const logger = require('./middleware/logger.js');


// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);

// Routes
app.use(authRoutes);

app.use('/api/v1', v1Routes);

// Catchalls
app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error("Missing Port"); }
    app.listen(port, () => console.log(`Now server customer # ${port}`));
  },
};