const express = require("express");
const router = express.Router();

module.exports = function() {
  // homepage url
  router.get("/", (req, res) => {
    res.render("index", {
      pageTitle: "Home"
    });
  });
  // About Us page
  router.get("/about", (req, res) => {
    res.render("about", {
      pageTitle: "About Us"
    });
  });
  // Contact page
  router.get("/contact", (req, res) => {
    res.render("contact", {
      pageTitle: "Contact Us"
    });
  });

  return router;
};
