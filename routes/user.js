const userController = require("../controllers/users");

const router = require("express").Router();

router.get("/:id", userController.getUserById);
router.patch("/:id", userController.updateUser);

module.exports = router;
