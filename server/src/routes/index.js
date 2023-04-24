const { Router } = require("express");
const cervezas = require("./cervezas");

const router = Router();

router.use("/cervezas", cervezas);

module.exports = router;
