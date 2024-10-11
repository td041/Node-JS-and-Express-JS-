const getHomepage = (req, res) => {
  res.send("Hello World with homepage");
};
const getABC = (req, res) => {
  res.send("Hello World ABC");
};
const getSample = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomepage,
  getABC,
  getSample,
};
