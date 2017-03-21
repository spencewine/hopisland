'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.
const db = require('./db');
const Buyers = require('./buyers');
const Product = require('./product');
const Category = require('./category');
const Hops = require('./hops');
const Orders = require('./orders');
const Review = require('./review');


// Category.hasMany(Product);
Product.belongsTo(Category);


Orders.belongsTo(Buyers);

Orders.belongsTo(Product);


Orders.belongsTo(Review, { as: 'sellerReview'});


Product.hasMany(Review);
Review.belongsTo(Product);


module.exports = {Buyers, Product, Category, Hops, Orders, Review, db};
