const router = require("express").Router();
const floorCtl = require("../../controllers/floor");

const {
    findAll,
    update
} = floorCtl;

router.route("/")
    .get(findAll)
    .post(update);

module.exports = router;