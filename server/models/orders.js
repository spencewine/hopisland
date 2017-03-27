'use strict';

const Sequelize = require('sequelize');
const db = require('./db');
const Product = require('./product');
const Review = require('./review');


const Orders = db.define('orders', {
  date       : Sequelize.DATE,
  orderAmount: {
    type: Sequelize.INTEGER
  },
  status: Sequelize.ENUM('carted', 'canceled', 'completed')
}, {
  hooks: {
    beforeBulkCreate: function() {
      Orders.max('orderAmount')
        .then(orderNum => {
          this.update({where: {
            orderAmount: orderNum
          }});
        });
    }
  },
  getterMethods: {
    fulfilled: function() {
      return this.status === 'completed' && this.date < Date.now();
    },
    pendingOrder: function() {
      return this.status === 'completed' && this.date > Date.now();
    }
  },


  classMethods: {
    getLargestOrderNumber: function() {
      return Orders.max('orderAmount');

    },

    getSellerAndProduct: function(orderId) {

      return Orders.findAll({
        where: {
          id: orderId
        },
        include: [ {model: Review}, {model: Product} ]
      });

    }
  }
});

module.exports = Orders;
