var express = require("express");
var router = express.Router();

let home = require("../controllers/home");

router.get("/", home.getHome);

module.exports = router;
