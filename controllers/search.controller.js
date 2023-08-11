const { response, request } = require("express");
const { Category, Product, Role, User } = require("../models");

const { ObjectId } = require("mongoose").Types;

const collections = ["categories", "products", "roles", "users"];

const search = (req = request, res = response) => {
  let { collection, term } = req.params;
  collection = collection.toLowerCase();
  term = term.toUpperCase();

  if (!collections.includes(collection)) {
    res.status(400).json({
      msg: `Collection ${collection} is not allowed`,
      errors: [],
    });
  }

  switch (collection) {
    case "categories":
      doSearch(Category, term, res);
      break;
    case "products":
      doSearch(Product, term, res);
      break;
    case "roles":
      doSearch(Role, term, res);
      break;
    case "users":
      doSearch(User, term, res);
      break;

    default:
      res.status(500).json({
        msg: "collection error, contact the administrator",
        errors: [],
      });
      break;
  }
};

const doSearch = async (model, term, res = response) => {
  const mongoId = ObjectId.isValid(term);

  let searchResult = [];
  if (mongoId) {
    searchResult = await model.findById(term);
  } else {
    searchResult = await model.findOne({ name: term });
  }

  return res.json({
    msg: `Searching ${term} finished`,
    data: searchResult ? [searchResult] : [],
  });
};

module.exports = {
  search,
};
