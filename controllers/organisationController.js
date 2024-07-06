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

exports.getOrganisation = async (req, res) => {
  const { orgId } = req.params;
  const { userId } = req.user;

  try {
    const organisation = await Organisation.findOne({
      where: { orgId },
      include: {
        model: User,
        where: { userId },
        attributes: [],
      },
      attributes: ["orgId", "name", "description"],
    });

    if (!organisation) {
      return res.status(404).json({
        status: "Not Found",
        message: "Organisation not found",
        statusCode: 404,
      });
    }

    res.status(200).json({
      status: "success",
      message: "Organisation retrieved successfully",
      data: organisation,
    });
  } catch (error) {
    console.error("Error retrieving organisation:", error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while retrieving the organisation",
      statusCode: 500,
    });
  }
};

exports.createOrganisation = async (req, res) => {
  const { name, description } = req.body;
  const { userId } = req.user;

  if (!name) {
    return res.status(400).json({
      status: "Bad Request",
      message: "Name is required",
      statusCode: 400,
    });
  }

  try {
    const organisation = await Organisation.create({
      name,
      description,
    });

    const user = await User.findByPk(userId);
    await user.addOrganisation(organisation);

    res.status(201).json({
      status: "success",
      message: "Organisation created successfully",
      data: {
        orgId: organisation.orgId,
        name: organisation.name,
        description: organisation.description,
      },
    });
  } catch (error) {
    console.error("Error creating organisation:", error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while creating the organisation",
      statusCode: 500,
    });
  }
};

exports.addUserToOrganisation = async (req, res) => {
  const { orgId } = req.params;
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({
      status: "Bad Request",
      message: "User ID is required",
      statusCode: 400,
    });
  }

  try {
    const organisation = await Organisation.findByPk(orgId);
    if (!organisation) {
      return res.status(404).json({
        status: "Not Found",
        message: "Organisation not found",
        statusCode: 404,
      });
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        status: "Not Found",
        message: "User not found",
        statusCode: 404,
      });
    }

    await organisation.addUser(user);

    res.status(200).json({
      status: "success",
      message: "User added to organisation successfully",
    });
  } catch (error) {
    console.error("Error adding user to organisation:", error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while adding the user to the organisation",
      statusCode: 500,
    });
  }
};
