const express = require("express");
const getLogin = require("../controller/loginController");
const decorateHtml = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

router.get("/", decorateHtml("login"), getLogin);

module.exports = router;
