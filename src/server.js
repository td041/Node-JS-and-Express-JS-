const express = require("express");
const path = require("path");
//config dotenv
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
configViewEngine(app);
app.use("/test", webRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
