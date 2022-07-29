const express = require("express");

const { Router } = express;

const router = new Router();

router.get("/hi/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hi! ${name} `);
});

module.exports = router;

const app = express();
app.use(router);
const PORT = 4000;

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
