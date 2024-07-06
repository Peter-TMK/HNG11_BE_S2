const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authMiddleware");
const { getUser } = require("../controllers/userController");
const {
  getUserOrganisations,
  getOrganisation,
  createOrganisation,
  addUserToOrganisation,
} = require("../controllers/organisationController");

router.get("/protected", authenticateToken, (req, res) => {
  res.status(200).json({
    status: "success",
    message: "You have accessed a protected route",
    data: {
      userId: req.user.userId,
    },
  });
});

router.get("/users/:id", authenticateToken, getUser);
router.get("/organisations", authenticateToken, getUserOrganisations);
router.get("/organisations/:orgId", authenticateToken, getOrganisation);
router.post("/organisations", authenticateToken, createOrganisation);
router.post(
  "/organisations/:orgId/users",
  authenticateToken,
  addUserToOrganisation
);

module.exports = router;
