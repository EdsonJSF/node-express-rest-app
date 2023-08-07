const { Category, User, Role } = require("../models");

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

const validateCategoryIdDB = async (id = "") => {
  const exitsCategory = await Category.findById(id);
  if (!exitsCategory) {
    throw new Error("Category does not exist");
  }
};

const validateCategoryNameDB = async (name = "") => {
  name = name.toUpperCase().trim();
  const exitsCategoryName = await Category.findOne({ name });
  if (exitsCategoryName && exitsCategoryName.state) {
    throw new Error(`Category ${name} already exist`);
  }
};

module.exports = {
  validateRoleDB,
  validateEmailDB,
  validateUserIdDB,
  validateCategoryIdDB,
  validateCategoryNameDB,
};
