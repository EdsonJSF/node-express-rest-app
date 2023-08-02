const { response, request } = require("express");

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

const createCategory = (req = request, res = response) => {
  res.json({
    msg: "createCategory",
    data: "",
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
