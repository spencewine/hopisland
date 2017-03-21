'use strict';

const {db, Buyers, Review, Product, Orders, Category, Hops} = require('../server/models');
const {randomString, randomNumber, randomColor} = require('../lib/utils/random');
const buyerCount = 10;
const hopsPerUser = [ 3, 8 ];
const notesPerBoard = [ 4, 12 ];
const presetUsers = [
  {
    first_name: 'Ada',
    last_name : 'Hopsmith',
    email     : 'ada@Hopsmith.com',
    username  : 'ada_hopsmith',
    password  : '12345'
  }
];

module.exports = db.didSync
  .then(() => db.sync({force: true}))
  .then(() => seedBuyers(buyerCount))
  .then(buyers => seedReviews(buyers, orders))

  .catch((err) => {
    console.error(err);
  })
  .finally(() => db.close());

/* User Functions */
function seedBuyers(count) {
  const buyers = [ ...presetBuyers ];

  for (let i = 0; i < count; i++) {
    buyers.push(generateUser());
  }

  return db.Promise.map(buyers, user => User.create(user));
}
function generateUser() {
  const firstName = randomString(3, 12);
  const lastName = randomString(3, 12);
  return {
    first_name: firstName,
    last_name : lastName,
    email     : `${randomString(3, 12)}@${randomString(2, 6)}.com`,
    username  : `${firstName}_${lastName}`,
    password  : randomString(8, 36)
  };
}

/* Board Functions */
function seedBoards(buyers, range) {
  const hops = [];

  buyers.forEach(user => {
    for (let i = 0; i < randomNumber(range[0], range[1]); i++) {
      let board;
      hops.push(
        Board.create(generateBoard())
          .then(data => {
            board = data;
            return board.addUser(user);
          })
          .then(() => board)
      );
    }
  });

  return db.Promise.all([
    db.Promise.all(hops),
    buyers
  ]);
}
function generateBoard() {
  return {
    name: randomString(3, 20),
    hash: `${randomString(6)}`
  };
}

/* Note Functions */
function seedOrders(orders, buyers, range) {
  const notes = [];

  orders.forEach(order => {
    for (let i = 0; i < randomNumber(range[0], range[1]); i++) {
      const buyer = buyers[randomNumber(buyers.length, false)];
      order.push(
        Orfers.create(generateNote())
          .then(note => {
            return Promise.all([
              note.set(board),
              note.setUser(user)
            ]);
          })
      );
    }
  });

  return db.Promise.all(notes);
}
function generateNote() {
  return {
    content: randomString(20, 120),
    color  : randomColor(),
    top    : randomNumber(0, 1000),
    left   : randomNumber(0, 1000)
  };
}
