const router = require("express").Router();
const billroutes = require("./billroutes");

// Bill Routes
router.use("/bills", billroutes);

module.exports = router;