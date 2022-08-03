const { Router } = require("express");

const router = new Router();

router.get("/", (req, res) => {
  res.send("Seperated");
});

module.exports = router;
