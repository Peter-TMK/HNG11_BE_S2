const request = require("supertest");
const app = require("../index"); // Adjust the path to your app
const { User, Organisation } = require("../models"); // Adjust the path as needed

describe("Organisation Endpoints", () => {
  let token;

  beforeAll(async () => {
    // Create a user and login to get a token
    const user = await User.create({
      /* user details */
    });
    const response = await request(app)
      .post("/api/auth/login")
      .send({ email: "test@example.com", password: "password" });
    token = response.body.data.accessToken;
  });

  it("should get a single organisation record", async () => {
    const organisation = await Organisation.create({
      /* organisation details */
    });

    const response = await request(app)
      .get(`/api/organisations/${organisation.orgId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body.data.orgId).toBe(organisation.orgId);
    expect(response.body.data.name).toBe(organisation.name);
  });

  // Add more tests for other endpoints
});
