const express = require("express");
const router = express.Router();
const { getHomepage, getABC, getSample } = require("../controllers/homeController");
router.get("/", getHomepage);
router.get("/abc", getABC);
//EJS
router.get("/sample", getSample);
module.exports = router; //export default
