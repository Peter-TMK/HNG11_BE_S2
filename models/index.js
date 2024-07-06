const User = require("./user");
const Organisation = require("./organisation");

// Define relationships
User.belongsToMany(Organisation, { through: "UserOrganisations" });
Organisation.belongsToMany(User, { through: "UserOrganisations" });

module.exports = {
  User,
  Organisation,
};
