const express = require("express");
const getUsers = require("../controller/usersController");
const decorateHtml = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

router.get("/users", decorateHtml("users"), getUsers);

module.exports = router;
