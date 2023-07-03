const { response, request } = require("express");

const getUsers = (req = request, res = response) => {
  const { q = "", apikey = "" } = req.query;

  res.json({
    ok: true,
    msg: "Get API Controller",
    params: {
      apikey,
      q,
    },
  });
};

const postUser = (req = request, res = response) => {
  const { name, age } = req.body;

  res.json({
    ok: true,
    msg: "Post API Controller",
    body: {
      name,
      age,
    },
  });
};

const putUser = (req = request, res = response) => {
  const id = req.params.id;

  res.json({
    ok: true,
    msg: "Put API Controller",
    params: {
      id,
    },
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
