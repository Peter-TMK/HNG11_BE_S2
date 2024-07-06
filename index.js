// // const express = require("express");
// // const sequelize = require("./config/database"); // Adjust the path as necessary
// // const User = require("./models/user"); // Adjust the path as necessary

// // require("dotenv").config();

// // const app = express();

// // // Test database connection
// // sequelize
// //   .authenticate()
// //   .then(() => {
// //     console.log("Connection to database successfull!");

// //     // Sync all models
// //     return sequelize.sync({ force: true }); // Use { force: true } to drop and recreate tables on every run (useful for development)
// //   })
// //   .then(() => {
// //     console.log("Database synchronized successfully.");
// //   })
// //   .catch((err) => {
// //     console.error("Unable to connect to the database:", err);
// //   });

// // app.get("/hi", (req, res) => {
// //   console.log("Hi HNG stage 2");
// //   res.send("Hi HNG stage 2");
// // });

// // app.listen(3333, () => console.log("server running on port 3333"));

// // const express = require("express");
// // const sequelize = require("./config/database");
// // const User = require("./models/user");
// // const { userValidationRules, validate } = require("./validators/userValidator");

// // require("dotenv").config();

// // const app = express();

// // app.use(express.json());

// // // Test database connection
// // sequelize
// //   .authenticate()
// //   .then(() => {
// //     console.log("Connection has been established successfully.");

// //     // Sync all models
// //     return sequelize.sync({ force: true });
// //   })
// //   .then(() => {
// //     console.log("Database synchronized successfully.");
// //   })
// //   .catch((err) => {
// //     console.error("Unable to connect to the database:", err);
// //   });

// // // User registration route
// // app.post("/register", userValidationRules(), validate, async (req, res) => {
// //   try {
// //     const { userId, firstName, lastName, email, password, phone } = req.body;
// //     const user = await User.create({
// //       userId,
// //       firstName,
// //       lastName,
// //       email,
// //       password,
// //       phone,
// //     });
// //     res.status(201).json({ message: "User created successfully", user });
// //   } catch (error) {
// //     res
// //       .status(500)
// //       .json({ message: "Internal server error", error: error.message });
// //   }
// // });

// // app.get("/hi", (req, res) => {
// //   console.log("Hi HNG stage 2");
// //   res.send("Hi HNG stage 2");
// // });

// // app.listen(3333, () => console.log("server running on port 3333"));

// // const express = require("express");
// // const sequelize = require("./config/database");
// // const User = require("./models/user");
// // const { userValidationRules, validate } = require("./validators/userValidator");
// // const bcrypt = require("bcryptjs");
// // require("dotenv").config();

// // const app = express();

// // app.use(express.json());

// // // Test database connection
// // sequelize
// //   .authenticate()
// //   .then(() => {
// //     console.log("Connection has been established successfully.");

// //     // Sync all models
// //     return sequelize.sync({ force: true });
// //   })
// //   .then(() => {
// //     console.log("Database synchronized successfully.");
// //   })
// //   .catch((err) => {
// //     console.error("Unable to connect to the database:", err);
// //   });

// // // User registration route
// // app.post("/register", userValidationRules(), validate, async (req, res) => {
// //   try {
// //     const { userId, firstName, lastName, email, password, phone } = req.body;

// //     // Hash the password
// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     // Create the user
// //     const user = await User.create({
// //       userId,
// //       firstName,
// //       lastName,
// //       email,
// //       password: hashedPassword,
// //       phone,
// //     });

// //     res.status(201).json({
// //       status: "success",
// //       message: "Registration successful",
// //       data: {
// //         user: {
// //           userId: user.userId,
// //           firstName: user.firstName,
// //           lastName: user.lastName,
// //           email: user.email,
// //           phone: user.phone,
// //           password: hashedPassword,
// //         },
// //       },
// //     });
// //   } catch (error) {
// //     res
// //       .status(500)
// //       .json({ message: "Internal server error", error: error.message });
// //   }
// // });

// // app.get("/hi", (req, res) => {
// //   console.log("Hi HNG stage 2");
// //   res.send("Hi HNG stage 2");
// // });

// // app.listen(3333, () => console.log("server running on port 3333"));

// // const express = require("express");
// // const sequelize = require("./config/database");
// // const User = require("./models/user");
// // const { userValidationRules, validate } = require("./validators/userValidator");
// // const bcrypt = require("bcryptjs");
// // const { generateToken } = require("./utils/jwt");
// // require("dotenv").config();

// // const app = express();

// // app.use(express.json());

// // // Test database connection
// // sequelize
// //   .authenticate()
// //   .then(() => {
// //     console.log("Connection has been established successfully.");

// //     // Sync all models
// //     return sequelize.sync({ force: true });
// //   })
// //   .then(() => {
// //     console.log("Database synchronized successfully.");
// //   })
// //   .catch((err) => {
// //     console.error("Unable to connect to the database:", err);
// //   });

// // // User registration route
// // app.post("/register", userValidationRules(), validate, async (req, res) => {
// //   try {
// //     const { userId, firstName, lastName, email, password, phone } = req.body;

// //     // Hash the password
// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     // Create the user
// //     const user = await User.create({
// //       userId,
// //       firstName,
// //       lastName,
// //       email,
// //       password: hashedPassword,
// //       phone,
// //     });

// //     res.status(201).json({
// //       status: "success",
// //       message: "Registration successful",
// //       data: {
// //         user: {
// //           userId: user.userId,
// //           firstName: user.firstName,
// //           lastName: user.lastName,
// //           email: user.email,
// //           phone: user.phone,
// //         },
// //       },
// //     });
// //   } catch (error) {
// //     res
// //       .status(500)
// //       .json({ message: "Internal server error", error: error.message });
// //   }
// // });

// // // User login route
// // app.post("/login", async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     // Find the user by email
// //     const user = await User.findOne({ where: { email } });

// //     if (!user) {
// //       return res.status(401).json({
// //         status: "Bad request",
// //         message: "Authentication failed",
// //         statusCode: 401,
// //       });
// //     }

// //     // Compare the password
// //     const isMatch = await bcrypt.compare(password, user.password);

// //     if (!isMatch) {
// //       return res.status(401).json({
// //         status: "Bad request",
// //         message: "Authentication failed",
// //         statusCode: 401,
// //       });
// //     }

// //     // Generate JWT token
// //     const token = generateToken(user);

// //     res.status(200).json({
// //       status: "success",
// //       message: "Login successful",
// //       data: {
// //         accessToken: token,
// //         user: {
// //           userId: user.userId,
// //           firstName: user.firstName,
// //           lastName: user.lastName,
// //           email: user.email,
// //           phone: user.phone,
// //         },
// //       },
// //     });
// //   } catch (error) {
// //     res
// //       .status(500)
// //       .json({ message: "Internal server error", error: error.message });
// //   }
// // });

// // app.get("/hi", (req, res) => {
// //   console.log("Hi HNG stage 2");
// //   res.send("Hi HNG stage 2");
// // });

// // app.listen(3333, () => console.log("server running on port 3333"));

// // const express = require("express");
// // const sequelize = require("./config/database");
// // const User = require("./models/user");
// // const { userValidationRules, validate } = require("./validators/userValidator");
// // const bcrypt = require("bcryptjs");
// // const { generateToken } = require("./utils/jwt");
// // const authenticate = require("./middleware/auth");
// // require("dotenv").config();

// // const app = express();

// // app.use(express.json());

// // // Test database connection
// // sequelize
// //   .authenticate()
// //   .then(() => {
// //     console.log("Connection has been established successfully.");

// //     // Sync all models
// //     return sequelize.sync({ force: true });
// //   })
// //   .then(() => {
// //     console.log("Database synchronized successfully.");
// //   })
// //   .catch((err) => {
// //     console.error("Unable to connect to the database:", err);
// //   });

// // // User registration route
// // app.post("/register", userValidationRules(), validate, async (req, res) => {
// //   try {
// //     const { userId, firstName, lastName, email, password, phone } = req.body;

// //     // Hash the password
// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     // Create the user
// //     const user = await User.create({
// //       userId,
// //       firstName,
// //       lastName,
// //       email,
// //       password: hashedPassword,
// //       phone,
// //     });

// //     res.status(201).json({
// //       status: "success",
// //       message: "Registration successful",
// //       data: {
// //         user: {
// //           userId: user.userId,
// //           firstName: user.firstName,
// //           lastName: user.lastName,
// //           email: user.email,
// //           phone: user.phone,
// //         },
// //       },
// //     });
// //   } catch (error) {
// //     res
// //       .status(500)
// //       .json({ message: "Internal server error", error: error.message });
// //   }
// // });

// // // User login route
// // app.post("/login", async (req, res) => {
// //   const { email, password } = req.body;

// //   try {
// //     // Find the user by email
// //     const user = await User.findOne({ where: { email } });

// //     if (!user) {
// //       return res.status(401).json({
// //         status: "Bad request",
// //         message: "Authentication failed",
// //         statusCode: 401,
// //       });
// //     }

// //     // Compare the password
// //     const isMatch = await bcrypt.compare(password, user.password);

// //     if (!isMatch) {
// //       return res.status(401).json({
// //         status: "Bad request",
// //         message: "Authentication failed",
// //         statusCode: 401,
// //       });
// //     }

// //     // Generate JWT token
// //     const token = generateToken(user);

// //     res.status(200).json({
// //       status: "success",
// //       message: "Login successful",
// //       data: {
// //         accessToken: token,
// //         user: {
// //           userId: user.userId,
// //           firstName: user.firstName,
// //           lastName: user.lastName,
// //           email: user.email,
// //           phone: user.phone,
// //         },
// //       },
// //     });
// //   } catch (error) {
// //     res
// //       .status(500)
// //       .json({ message: "Internal server error", error: error.message });
// //   }
// // });

// // // Protected route example
// // app.get("/protected", authenticate, (req, res) => {
// //   res.send("This is a protected route. Only accessible with a valid token.");
// // });

// // app.get("/hi", (req, res) => {
// //   console.log("Hi HNG stage 2");
// //   res.send("Hi HNG stage 2");
// // });

// // app.listen(3333, () => console.log("server running on port 3333"));

// const express = require("express");
// const bcrypt = require("bcryptjs");
// const { body, validationResult } = require("express-validator");
// const { User, Organization } = require("./models");
// const { generateToken } = require("./utils/jwt");
// const sequelize = require("./config/database");

// const app = express();
// app.use(express.json());

// const userValidationRules = () => [
//   body("firstName").notEmpty().withMessage("First name is required"),
//   body("lastName").notEmpty().withMessage("Last name is required"),
//   body("email")
//     .isEmail()
//     .withMessage("Invalid email")
//     .notEmpty()
//     .withMessage("Email is required"),
//   body("password").notEmpty().withMessage("Password is required"),
// ];

// const validate = (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(422).json({
//       errors: errors
//         .array()
//         .map((error) => ({ field: error.param, message: error.msg })),
//     });
//   }
//   next();
// };

// app.post("/register", userValidationRules(), validate, async (req, res) => {
//   try {
//     const { userId, firstName, lastName, email, password, phone } = req.body;

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create the user
//     const user = await User.create({
//       userId,
//       firstName,
//       lastName,
//       email,
//       password: hashedPassword,
//       phone,
//     });

//     // Create default organization
//     const organization = await Organization.create({
//       name: `${firstName}'s Organization`,
//       description: `Default organization for ${firstName}`,
//     });

//     // Add user to the organization
//     await user.addOrganization(organization);

//     // Generate JWT token
//     const token = generateToken(user);

//     res.status(201).json({
//       status: "success",
//       message: "Registration successful",
//       data: {
//         accessToken: token,
//         user: {
//           userId: user.userId,
//           firstName: user.firstName,
//           lastName: user.lastName,
//           email: user.email,
//           phone: user.phone,
//         },
//       },
//     });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Internal server error", error: error.message });
//   }
// });

// const authenticate = async (req, res, next) => {
//   const token = req.header("Authorization")?.replace("Bearer ", "");

//   if (!token) {
//     return res.status(401).json({
//       status: "Bad request",
//       message: "Authentication failed",
//       statusCode: 401,
//     });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findOne({ where: { userId: decoded.userId } });

//     if (!user) {
//       throw new Error();
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json({
//       status: "Bad request",
//       message: "Authentication failed",
//       statusCode: 401,
//     });
//   }
// };

// app.get("/organisations", authenticate, async (req, res) => {
//   try {
//     const organisations = await req.user.getOrganizations();
//     res.status(200).json({
//       status: "success",
//       message: "Organisations fetched successfully",
//       data: {
//         organisations: organisations.map((org) => ({
//           orgId: org.orgId,
//           name: org.name,
//           description: org.description,
//         })),
//       },
//     });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Internal server error", error: error.message });
//   }
// });

// app.listen(3333, () => console.log("server running on port 3333"));

// const express = require("express");
// const routes = require("./routes");

// const app = express();
// app.use(express.json());

// app.use("/api", routes);

// app.listen(3333, () => console.log("server running on port 3333"));

/**
const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(express.json());

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

// Define User model
const User = sequelize.define("User", {
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
  },
});

// Define Organisation model
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

// Relationships
User.belongsToMany(Organisation, { through: "UserOrganisations" });
Organisation.belongsToMany(User, { through: "UserOrganisations" });

// Sync models
sequelize.sync();

app.post("/api/auth/register", async (req, res) => {
  const { firstName, lastName, email, password, phone } = req.body;

  // Validation
  if (!firstName || !lastName || !email || !password) {
    return res.status(422).json({
      errors: [
        { field: "firstName", message: "First name is required" },
        { field: "lastName", message: "Last name is required" },
        { field: "email", message: "Email is required" },
        { field: "password", message: "Password is required" },
      ],
    });
  }

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
    });

    // Create default organisation
    const organisationName = `${firstName}'s Organisation`;
    const organisation = await Organisation.create({
      name: organisationName,
      description: `${firstName}'s default organisation`,
    });

    await user.addOrganisation(organisation);

    // Generate JWT token
    const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({
      status: "success",
      message: "Registration successful",
      data: {
        accessToken: token,
        user: {
          userId: user.userId,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
        },
      },
    });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(422).json({
        errors: error.errors.map((e) => ({
          field: e.path,
          message: e.message,
        })),
      });
    } else {
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  }
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({
      errors: [
        { field: "email", message: "Email is required" },
        { field: "password", message: "Password is required" },
      ],
    });
  }

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({
        status: "Bad request",
        message: "Authentication failed",
        statusCode: 401,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        status: "Bad request",
        message: "Authentication failed",
        statusCode: 401,
      });
    }

    const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      status: "success",
      message: "Login successful",
      data: {
        accessToken: token,
        user: {
          userId: user.userId,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
        },
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
});

app.listen(3333, () => console.log("server running on port 3333"));

*/

const express = require("express");
require("dotenv").config();
const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");

const app = express();
app.use(express.json());

sequelize.sync();

app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log("server running on port 3333"));
