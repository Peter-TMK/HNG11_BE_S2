const { User, Organisation } = require("../models");

exports.getUser = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;

  try {
    // Ensure the user can only access their own data or data related to organisations they belong to or created
    if (id !== userId) {
      const organisations = await Organisation.findAll({
        include: {
          model: User,
          where: { userId },
        },
      });

      const isRelatedUser = organisations.some((org) =>
        org.Users.some((user) => user.userId === id)
      );

      if (!isRelatedUser) {
        return res.status(403).json({
          status: "Forbidden",
          message: "You do not have access to this user's information",
          statusCode: 403,
        });
      }
    }

    const user = await User.findOne({
      where: { userId: id },
      attributes: ["userId", "firstName", "lastName", "email", "phone"],
    });

    if (!user) {
      return res.status(404).json({
        status: "Not Found",
        message: "User not found",
        statusCode: 404,
      });
    }

    res.status(200).json({
      status: "success",
      message: "User retrieved successfully",
      data: user,
    });
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while retrieving the user",
      statusCode: 500,
    });
  }
};
