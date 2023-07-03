const { response } = require("express");

const getUsers = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Get API Controller",
  });
};

const postUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Post API Controller",
  });
};

const putUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Put API Controller",
  });
};

const deleteUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Delete API Controller",
  });
};

module.exports = {
  getUsers,
  postUser,
  putUser,
  deleteUser,
};
