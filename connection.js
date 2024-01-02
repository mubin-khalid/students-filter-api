const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const Students = require("./models/students");
const seed = require("./seed");

let promise;
module.exports = {
  initialize: () => {
    if (promise) {
      return promise;
    } else {
      promise = sequelize
        .authenticate()
        .then((result) => {
          console.log(`SQLite successfully connected!`);
          return Students.sync();
        })
        .then((result) => {
          console.log(`Students table created`);
          return seed.load();
        })
        .then(() => {})
        .catch((error) => {
          console.error("Unable to connect to SQLite database:", error);
        });
      return promise;
    }
  },
};
