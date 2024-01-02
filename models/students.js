const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Students = sequelize.define(
  "students",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    marks: {
      type: DataTypes.FLOAT,
    },
  },
  { timestamps: false }
);

module.exports = Students;
