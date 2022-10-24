const {
  complainControllers,
  getComplainsControllers,
} = require("../controllers/complain");

const router = require("express").Router();

router.post("/complain", complainControllers);
router.get("/allcomplains", getComplainsControllers);

module.exports = router;
