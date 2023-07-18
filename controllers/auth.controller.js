const { response } = require("express");
const bcryptjs = require("bcryptjs");

const User = require("../models/user.model");

const authLogin = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    // Verify email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        msg: "Email / Password Invalid - email",
        errors: [],
      });
    }

    // User is active ?
    if (!user.state) {
      return res.status(400).json({
        msg: "Email / Password Invalid - state",
        errors: [],
      });
    }

    // Verify password
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "Email / Password Invalid - pass",
        errors: [],
      });
    }

    // Generate JWT

    res.json({
      msg: "Login ok",
      data: {
        email,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "An unspected error",
      errors: [],
    });
  }
};

module.exports = {
  authLogin,
};
