const validateDB = require("./db-validators");
const validateFields = require("./validate-fields");
const validateJWT = require("./validate-jwt");
const validateRole = require("./validate-role");

module.exports = {
  ...validateDB,
  ...validateFields,
  ...validateJWT,
  ...validateRole,
};
