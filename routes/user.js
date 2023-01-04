const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => {
  res.send("We are at user");
});

module.exports = router;
