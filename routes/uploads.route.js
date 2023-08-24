const { Router } = require("express");
const { check } = require("express-validator");

// Controllers
const { loadFile, updateFile } = require("../controllers/uploads.controller");

// Middlewares
const { validateFields, validateCollections } = require("../middlewares");

const router = Router();

router.post("/", [], loadFile);

router.put(
  "/:collection/:id",
  [
    check("id", "Invalid id").isMongoId(),
    check("collection").custom((c) =>
      validateCollections(c, ["users", "products"])
    ),
    validateFields,
  ],
  updateFile
);

module.exports = router;
