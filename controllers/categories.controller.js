const { response, request } = require("express");

const Categorie = require("../models/categorie.model");

const getCategories = (req = request, res = response) => {
  res.json({
    msg: "getCategories",
    data: "",
  });
};

const getCategory = (req = request, res = response) => {
  res.json({
    msg: "getCategory",
    data: "",
  });
};

const createCategory = async (req = request, res = response) => {
  const { _id } = req.getUser;
  const name = req.body.name.toUpperCase().trim();

  const data = { name, user: _id };

  const categorieDB = await Categorie.findOne({ name });
  if (categorieDB) {
    return res.status(400).json({
      msg: `Categorie ${name} already exist`,
      errors: [],
    });
  }

  const categorie = new Categorie(data);
  await categorie.save();

  res.status(201).json({
    msg: "The categorie was added",
    data: categorie,
  });
};

const updateCategory = (req = request, res = response) => {
  res.json({
    msg: "updateCategory",
    data: "",
  });
};

const deleteCategories = (req = request, res = response) => {
  res.json({
    msg: "deleteCategories",
    data: "",
  });
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategories,
};
