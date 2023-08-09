const { Router } = require("express");
const { check } = require("express-validator");

// Controllers
const { search } = require("../controllers/search.controller");

// Middlewares
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.get("/:collection/:term", search);

module.exports = router;
