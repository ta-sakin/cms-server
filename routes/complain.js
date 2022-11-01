const complainsController = require("../controllers/complain");

const router = require("express").Router();

router.post("/complain", complainsController.submitComplain);
router.get("/complain", complainsController.findUserName);
router.get("/allcomplains", complainsController.getAllComplains);
router.put("/complain", complainsController.updateComplain);

module.exports = router;
