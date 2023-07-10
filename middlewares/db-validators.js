const Role = require("../models/role.model");
const User = require("../models/user.model");

const validateRoleDB = async (rol = "") => {
  const role = await Role.findOne({ rol });
  if (!role) {
    throw new Error(`Invalid rol`);
  }
};

const validateEmailDB = async (email = "") => {
  const exitsEmail = await User.findOne({ email });
  if (exitsEmail) {
    throw new Error(`Email already exist`);
  }
};

module.exports = {
  validateRoleDB,
  validateEmailDB,
};
