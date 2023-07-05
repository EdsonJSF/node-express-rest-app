const { Router } = require("express");
const { check } = require("express-validator");

const {
  getUsers,
  postUser,
  putUser,
  deleteUser,
} = require("../controllers/users.controller");

const router = Router();

router.get("/", getUsers);

router.post(
  "/",
  [
    check("email", "Invalid email").isEmail(),
  ],
  postUser
);

router.put("/:id", putUser);

router.delete("/", deleteUser);

module.exports = router;
