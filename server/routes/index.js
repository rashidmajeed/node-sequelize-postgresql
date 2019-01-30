const express = require("express");
const router = express.Router();

module.exports = function() {
  // homepage url
  router.get("/", (req, res) => {
    res.render("index", {
      pageTitle: "Home"
    });
  });

  return router;
};
