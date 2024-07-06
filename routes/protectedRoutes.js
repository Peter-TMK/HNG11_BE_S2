const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authMiddleware");
const { getUser } = require("../controllers/userController");
const {
  getUserOrganisations,
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

module.exports = router;
