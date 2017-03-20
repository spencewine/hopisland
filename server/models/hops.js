'use strict';

const Sequelize = require('sequelize');
const db = require('./db');


const Hops = db.define('hops', {
  name         : Sequelize.STRING,
  description  : Sequelize.TEXT,
  cost         : Sequelize.INTEGER,
  img_url      : Sequelize.STRING,
  activeGrowing: {
    type        : Sequelize.BOOLEAN,
    defaultValue: true
  }

},
  {

  });

module.exports = Hops;
