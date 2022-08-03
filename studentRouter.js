const { Router } = require("express");

const students = ["Nick", "Vicky", "Hannah", "Zoey", "Lily"];

const router = new Router();

router.get("/", (req, res) => res.send(students));

module.exports = router;
