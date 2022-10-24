const router = require("express").Router();
const authenticate = require("../middleware/authenticate");
const authRoutes = require("./auth");
const complainRoutes = require("./complain");
const reactionsRoutes = require("./reactions");

router.use("/api/auth", authRoutes);
router.use("/api", authenticate, complainRoutes);
router.use("/api", authenticate, reactionsRoutes);

module.exports = router;
