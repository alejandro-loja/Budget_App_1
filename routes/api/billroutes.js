const router = require("express").Router();
const billcontroller = require("../../controllers/billcontroller");

// Matches with "/api/bills"
// gets all result, or post to create a record
router
    .route("/")
    .get(billcontroller.findAll)
    .post(billcontroller.create);

// Matches with "/api/bills/:id"
// find one, modifyone, or remove
router
    .route("/:id")
    .get(billcontroller.findById)
    .put(billcontroller.update)
    .delete(billcontroller.remove)

// router
//     .route("/pass/:id")
//     .get(billcontroller.findByPass)

module.exports = router;