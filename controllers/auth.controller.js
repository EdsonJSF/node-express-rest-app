const { response } = require("express");

const authLogin = (req, res = response) => {
  const { ...body } = req.body;
  res.json({
    msg: "Login ok",
    data: body,
  });
};

module.exports = {
  authLogin,
};
