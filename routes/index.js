var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("pages/index", {
    title: "EJS ,Mongoose and Search indexing practice",
  });
});

module.exports = router;
