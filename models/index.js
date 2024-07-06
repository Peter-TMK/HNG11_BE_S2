// const User = require("./user");
// const Organization = require("./Organization");

// User.belongsToMany(Organization, { through: "UserOrganizations" });
// Organization.belongsToMany(User, { through: "UserOrganizations" });

// module.exports = { User, Organization };

// const User = require("./user");
// const Organization = require("./organization");

// // Many-to-Many relationship
// User.belongsToMany(Organization, { through: "UserOrganizations" });
// Organization.belongsToMany(User, { through: "UserOrganizations" });

// module.exports = { User, Organization };

const User = require("./user");
const Organisation = require("./organisation");

// Define relationships
User.belongsToMany(Organisation, { through: "UserOrganisations" });
Organisation.belongsToMany(User, { through: "UserOrganisations" });

module.exports = {
  User,
  Organisation,
};
