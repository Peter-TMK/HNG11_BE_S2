// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/database");

// const Organization = sequelize.define("Organization", {
//   orgId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   description: {
//     type: DataTypes.STRING,
//   },
// });

// module.exports = Organization;

// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/database");

// const Organization = sequelize.define("Organization", {
//   orgId: {
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
//     primaryKey: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   description: {
//     type: DataTypes.STRING,
//   },
// });

// module.exports = Organization;

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Organisation = sequelize.define("Organisation", {
  orgId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Organisation;
