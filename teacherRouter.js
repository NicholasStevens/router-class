const { Router } = require("express");

const teachers = ["Jack", "Kelly", "HisWattson"];

const router = new Router();

router.get("/", (req, res) => res.send(teachers));

module.exports = router;
