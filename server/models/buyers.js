'use strict';

const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');
const db = require('./db');

const Buyers = db.define('buyers', {
  firstName: Sequelize.STRING,
  lastName : Sequelize.STRING,
  email    : {
    type    : Sequelize.STRING,
    validate: {
      isEmail : true,
      notEmpty: true,
    }
  },

  // We support oauth, so buyers may or may not have passwords.
  password_digest: Sequelize.STRING,
  password       : Sequelize.VIRTUAL,
  isAdmin        : {
    type        : Sequelize.BOOLEAN,
    defaultValue: false
  }
}, {
  indexes: [ {fields: [ 'email' ], unique: false, } ],
  hooks  : {
    beforeCreate: setEmailAndPassword,
    beforeUpdate: setEmailAndPassword,
  },
  instanceMethods: {
    authenticate(plaintext) {
      return new Promise((resolve, reject) =>
        bcrypt.compare(plaintext, this.password_digest,
          (err, result) => {
            return err ? reject(err) : resolve(result);
          }
        )


        );
    },
    usernameTrunc: function() {
      const truncLast = this.lastName.slice(0, 1);
      return this.firstName + this.last + truncLast;
    }
  }
});

function setEmailAndPassword(buyer) {
  buyer.email = buyer.email && buyer.email.toLowerCase();
  if (!buyer.password) return Promise.resolve(buyer);

  return new Promise((resolve, reject) =>
  bcrypt.hash(buyer.get('password'), 10, (err, hash) => {
    if (err) reject(err);
    buyer.set('password_digest', hash);
    resolve(buyer);
  })
  );
}

module.exports = Buyers;
