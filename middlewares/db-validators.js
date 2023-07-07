const Role = require("../models/role.model");

const validateRoleDB = async (rol = "") => {
  const role = await Role.findOne({ rol });
  if (!role) {
    throw new Error(`Invalid rol`);
  }
};

module.exports = {
  validateRoleDB,
};
