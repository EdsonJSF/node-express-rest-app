const { response, request } = require("express");
const { uploadFile } = require("../helpers");
const { User, Product } = require("../models");

const loadFile = async (req, res = response) => {
  uploadFile(req.files)
    .then((resp) => {
      const { file } = req.files;
      return res.json({ msg: `File uploaded: ${resp}`, data: file });
    })
    .catch((resp) => {
      return res.status(400).json({ msg: resp });
    });
};

const updateFile = async (req = request, res = response) => {
  const { collection, id } = req.params;

  let modelo;

  switch (collection.toLowerCase()) {
    case "users":
      modelo = await User.findById(id);
      if (!modelo) {
        return res.status(400).json({
          msg: "User does not exist",
          errors: [],
        });
      }
      break;

    case "products":
      modelo = await Product.findById(id);
      if (!modelo) {
        return res.status(400).json({
          msg: "Product does not exist",
          errors: [],
        });
      }
      break;

    default:
      return res.status(500).json({
        msg: "Update file error, contact the administrator",
        errors: [],
      });
  }

  const name = await uploadFile(req.files, undefined, "images");

  modelo.image = name;
  await modelo.save();

  res.json({
    msg: `${collection} was updated`,
    data: modelo,
  });
};

module.exports = {
  loadFile,
  updateFile,
};
