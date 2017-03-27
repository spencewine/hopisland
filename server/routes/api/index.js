'use strict';

const api = module.exports = require('express').Router();

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/hops', require('./hops'))
  .use('/reviews', require('./reviews'))
  .use('/buyers', require('./buyers'))
  // .use('/auth', require('./auth'))
  .use('/orders', require('./orders'))
  .use('/product', require('./product'));
  // .use('/unread', require('./unread_note'));

// Send along any errors
api.use((err, req, res, next) => {
  console.error('error:', err.stack);
  res.status(500).send(err);
});

// No routes matched? 404.
api.use((req, res) => res.status(404).end());
