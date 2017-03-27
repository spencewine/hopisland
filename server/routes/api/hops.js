const express = require('express');
const Router = express.Router;
const router = new Router();
const {Hops} = require('../../models');

router.get('/', (req, res, next) => {
  return Hops.findAll()
    .then(hops => res.send(hops))
    .catch(next);
});

module.exports = router;
