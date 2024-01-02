const sequelize_fixtures = require("sequelize-fixtures");
const Students = require("./models/students");

module.exports = {
  load: () => {
    return sequelize_fixtures
      .loadFile("fixtures/*.json", { students: Students })
      .then(() => {
        console.log("Loaded seed data");
      })
      .catch((err) => {
        console.log("Error seeding data", err);
      });
  },
};
