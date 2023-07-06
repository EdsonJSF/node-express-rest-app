const { Router } = require("express");
const { check } = require("express-validator");

const {
  getUsers,
  postUser,
  putUser,
  deleteUser,
} = require("../controllers/users.controller");
const { validateFields } = require("../middlewares/validate-fields");

const router = Router();

router.get("/", getUsers);

router.post(
  "/",
  [
    check("name", "Invalid name").not().isEmpty(),
    check("email", "Invalid email").isEmail(),
    check("password", "Invalid password").isLength({ min: 6 }),
    check("rol", "Invalid rol").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    validateFields,
  ],
  postUser
);

router.put("/:id", putUser);

router.delete("/", deleteUser);

module.exports = router;
