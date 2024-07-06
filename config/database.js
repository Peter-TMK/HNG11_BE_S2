// const { Sequelize } = require("sequelize");
// require("dotenv").config();

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: "postgres",
//   protocol: "postgres",
//   logging: false,
// });

// module.exports = sequelize;

// const { Sequelize } = require("sequelize");
// require("dotenv").config();

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: "postgres",
//   protocol: "postgres",
//   logging: false, // Disable logging; default: console.log
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection to database successful!");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });

// module.exports = sequelize;

const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
