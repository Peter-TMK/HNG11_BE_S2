const jwt = require("jsonwebtoken");
const { User } = require("../models"); // Adjust the path as needed
const { authenticateToken } = require("../middlewares/authMiddleware"); // Adjust the path as needed

describe("Token Generation", () => {
  it("should generate a token with correct user details", () => {
    const user = { userId: "12345" };
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    expect(decoded.userId).toBe(user.userId);
  });

  it("should expire the token at the correct time", () => {
    const user = { userId: "12345" };
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1s" });

    setTimeout(() => {
      expect(() => jwt.verify(token, process.env.JWT_SECRET)).toThrow();
    }, 2000);
  });
});
