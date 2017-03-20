'use strict';

const Sequelize = require('sequelize');
const db = require('./db');
const Category = require('./category');
const Review = require('./review');
const Orders = require('./orders');

const Product = db.define('product', {
  name       : Sequelize.STRING,
  description: Sequelize.TEXT,
  price      : Sequelize.INTEGER,
  img_url    : Sequelize.STRING,
  active     : {
    type        : Sequelize.BOOLEAN,
    defaultValue: true
  }

},
  {
    classMethods: {
      getProductReviews: function(id) {
        return Product.findAll({where:
          {id: id},
          include: [ {model: Review} ]


        });
      }
    }
  });

module.exports = Product;
