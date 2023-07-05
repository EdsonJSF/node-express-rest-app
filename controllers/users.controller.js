const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const User = require("../models/user.model");

const getUsers = (req = request, res = response) => {
  const { q = "", apikey = "" } = req.query;

  res.json({
    msg: "Get API Controller",
    params: {
      apikey,
      q,
    },
  });
};

const postUser = async (req = request, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      msg: "You have some request errors",
      errors,
    });
  }
  const { name, email, password, rol } = req.body;

  const user = new User({ name, email, password, rol });

  // Check unique email
  const exitsEmail = await User.findOne({ email });
  if (exitsEmail) {
    return res.status(400).json({
      msg: "Email already exist",
    });
  }

  // Encrypt pass
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  // Save user
  await user.save();

  res.json({
    msg: "Post API Controller",
    data: user,
  });
};

const putUser = (req = request, res = response) => {
  const id = req.params.id;

  res.json({
    msg: "Put API Controller",
    params: {
      id,
    },
  });
};

const deleteUser = (req, res = response) => {
  res.json({
    msg: "Delete API Controller",
  });
};

module.exports = {
  getUsers,
  postUser,
  putUser,
  deleteUser,
};
