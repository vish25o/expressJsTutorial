const express = require("express");

const router = express.Router();
const fun = require("./UserController");

router.route("/register").post(fun.registerUser);




module.exports = router;
