// const request = require("supertest");
// const app = require("../index"); // Adjust the path to your app

// describe("Auth Endpoints", () => {
//   it("should register user successfully with default organisation", async () => {
//     const response = await request(app).post("/api/auth/register").send({
//       firstName: "John",
//       lastName: "Doe",
//       email: "john.doe@example.com",
//       password: "password",
//       phone: "1234567890",
//     });

//     expect(response.status).toBe(201);
//     expect(response.body.status).toBe("success");
//     expect(response.body.data.user.email).toBe("john.doe@example.com");
//     expect(response.body.data.accessToken).toBeDefined();
//   });

//   it("should fail if required fields are missing", async () => {
//     const response = await request(app)
//       .post("/api/auth/register")
//       .send({ email: "john.doe@example.com" }); // Missing required fields

//     expect(response.status).toBe(400);
//     expect(response.body.status).toBe("Bad request");
//   });

//   it("should fail if there is duplicate email", async () => {
//     await request(app).post("/api/auth/register").send({
//       firstName: "John",
//       lastName: "Doe",
//       email: "john.doe@example.com",
//       password: "password",
//       phone: "1234567890",
//     });

//     const response = await request(app).post("/api/auth/register").send({
//       firstName: "Jane",
//       lastName: "Doe",
//       email: "john.doe@example.com",
//       password: "password",
//       phone: "0987654321",
//     });

//     expect(response.status).toBe(400);
//     expect(response.body.status).toBe("Bad request");
//   });
// });

// const request = require("supertest");
// const app = require("../src/index"); // Adjust the path to your app

// describe("Auth Endpoints", () => {
//   it("should register user successfully with default organisation", async () => {
//     const response = await request(app).post("/api/auth/register").send({
//       firstName: "John",
//       lastName: "Doe",
//       email: "john.doe@example.com",
//       password: "password123",
//     });
//     expect(response.status).toBe(201);
//     expect(response.body).toHaveProperty("data");
//     // Add more assertions based on your response structure
//   });

//   // Additional tests...
// });

const request = require("supertest");
const app = require("../index");
const sequelize = require("../config/database");

describe("Auth Endpoints", () => {
  beforeAll(async () => {
    // Optionally, you can set up any required preconditions here
    await sequelize.authenticate();
  });

  afterAll(async () => {
    // Close any open connections
    await sequelize.close();
    // If you started any other servers or connections, close them here
  });

  it("should register user successfully with default organisation", async () => {
    const response = await request(app).post("/api/auth/register").send({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "password123",
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("data");
    // Add more assertions based on your response structure
  });

  // Additional tests...
});
