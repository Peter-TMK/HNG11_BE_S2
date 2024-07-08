const { Sequelize } = require("sequelize");
require("dotenv").config();

// const sequelize = new Sequelize(process.env.POSTGRESQL_ADDON_URI, {
//   dialect: "postgres",
//   protocol: "postgres",
//   logging: false,
// });

const sequelize = new Sequelize(process.env.POSTGRESQL_ADDON_URI, {
  dialect: "postgres",
  protocol: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Depending on your setup, you might need to set this to true or false
    },
  },
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
