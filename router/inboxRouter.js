const express = require("express");
const getInbox = require("../controller/inboxController");
const decorateHtml = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

router.get("/inbox", decorateHtml("inbox"), getInbox);

module.exports = router;
