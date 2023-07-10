const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

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
  const { name, email, password, rol } = req.body;
  const user = new User({ name, email, password, rol });

  // Encrypt pass
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  // Save user
  await user.save();

  res.json({
    msg: "The user was added",
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
