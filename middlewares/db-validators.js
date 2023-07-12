const Role = require("../models/role.model");
const User = require("../models/user.model");

const validateRoleDB = async (rol = "") => {
  const role = await Role.findOne({ rol });
  if (!role) {
    throw new Error("Invalid rol");
  }
};

const validateEmailDB = async (email = "") => {
  const exitsEmail = await User.findOne({ email });
  if (exitsEmail) {
    throw new Error("Email already exist");
  }
};

const validateUserIdDB = async (id = "") => {
  const exitsUser = await User.findById(id);
  if (!exitsUser) {
    throw new Error("User does not exist");
  }
};

module.exports = {
  validateRoleDB,
  validateEmailDB,
  validateUserIdDB,
};
