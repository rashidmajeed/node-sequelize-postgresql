const express = require("express");
const routes = require("./routes");
const path = require("path");

// import configurations
const configs = require("./config");

// create the new server
const app = express();

// filtering the enviornment
const config = configs[app.get("env")];

// enabling Pug Template engine
app.set("view engine", "pug");

// setting path to the views folder
app.set("views", path.join(__dirname, "./views"));

// loading the public assets
app.use(express.static("public"));

// get the current date
app.use((req, res, next) => {
  const date = new Date();
  res.locals.currentYear = date.getFullYear();
  return next();
});

// passing sitename to the views
app.locals.sitetitle = config.sitename;

// listen for the home page
app.use("/", routes());

// run the application
app.listen(8000);
