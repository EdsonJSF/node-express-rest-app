const { Router } = require("express");
const { check } = require("express-validator");

// Controllers
const {
  getUsers,
  postUser,
  putUser,
  deleteUser,
} = require("../controllers/users.controller");

// Middlewares
const { validateFields } = require("../middlewares/validate-fields");
const { validateRoleDB } = require("../middlewares/db-validators");

const router = Router();

router.get("/", getUsers);

router.post(
  "/",
  [
    check("name", "Invalid name").not().isEmpty(),
    check("email", "Invalid email").isEmail(),
    check("password", "Invalid password").isLength({ min: 6 }),
    check("rol").custom(validateRoleDB),
    validateFields,
  ],
  postUser
);

router.put("/:id", putUser);

router.delete("/", deleteUser);

module.exports = router;
