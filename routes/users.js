var express = require("express");
const { getAllUsers, getSearchedUsers } = require("../apis/user/user.get");
const Users = require("../models/users");
var router = express.Router();

/* GET users listing. */
router.get("/all", getAllUsers);

router.get("/search", getSearchedUsers);

module.exports = router;
