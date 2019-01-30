const express = require("express");
const routes = require("./routes");
const path = require("path");

// create the new server
const app = express();

// enabling Pug Template engine
app.set("view engine", "pug");

// setting path to the views folder
app.set("views", path.join(__dirname, "./views"));

// loading the public assets
app.use(express.static("public"));

// listen for the home page
app.use("/", routes());

// run the application
app.listen(9000);
