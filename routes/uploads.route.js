const { Router } = require("express");
const { check } = require("express-validator");

// Controllers
const { loadFile } = require("../controllers/uploads.controller");

// Middlewares
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.post("/", [], loadFile);

module.exports = router;
