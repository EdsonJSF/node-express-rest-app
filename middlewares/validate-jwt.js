const { response, request } = require("express");
const jwt = require("jsonwebtoken");

const validateJWT = (req = request, res = response, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({
      msg: "You no have authorization",
      errors: [],
    });
  }
  try {
    const { uid } = jwt.verify(token, process.env.SECRET_JWT);

    req.uid = uid;

    next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      msg: "Invalid Token",
      errors: [],
    });
  }
};

module.exports = {
  validateJWT,
};
