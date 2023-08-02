const { Router } = require("express");
const { check } = require("express-validator");

// Controllers
const {
  createCategory,
  deleteCategories,
  getCategories,
  getCategory,
  updateCategory,
} = require("../controllers/categories.controller");

// Middlewares
const {
  validateJWT,
  validateFields,
  validateRoleAdmin,
} = require("../middlewares");

const router = Router();

router.get("/", getCategories);

router.get(
  "/:id",
  [check("id", "Invalid id").isMongoId(), validateFields],
  getCategory
);

router.post("/", [validateJWT], createCategory);

router.put(
  "/:id",
  [validateJWT, check("id", "Invalid id").isMongoId(), validateFields],
  updateCategory
);

router.delete(
  "/:id",
  [
    validateJWT,
    validateRoleAdmin,
    check("id", "Invalid id").isMongoId(),
    validateFields,
  ],
  deleteCategories
);

module.exports = router;
