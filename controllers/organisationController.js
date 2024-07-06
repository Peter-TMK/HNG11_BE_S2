const { Organisation, User } = require("../models");

exports.getUserOrganisations = async (req, res) => {
  const { userId } = req.user;

  try {
    const organisations = await Organisation.findAll({
      include: {
        model: User,
        where: { userId },
        attributes: [],
      },
      attributes: ["orgId", "name", "description"],
    });

    res.status(200).json({
      status: "success",
      message: "Organisations retrieved successfully",
      data: { organisations },
    });
  } catch (error) {
    console.error("Error retrieving organisations:", error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while retrieving the organisations",
      statusCode: 500,
    });
  }
};
