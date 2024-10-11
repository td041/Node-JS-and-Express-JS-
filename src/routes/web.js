const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Hello World! /");
});
router.get("/v1", (req, res) => {
  res.send("Hello World v1");
});
//EJS
router.get("/trinhduc", (req, res) => {
  // res.send("<h1>My Server</h1>");
  res.render("sample.ejs");
});
module.exports = router; //export default
