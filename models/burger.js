//Import ORM
const orm = require("../config/orm.js");

//ORM Template for Burger 
const burger = {
  select: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insert: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
