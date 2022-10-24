const router = require("express").Router();
const votesControllers = require("../controllers/reactions");

router.put("/votes", votesControllers.updateUpvote);
router.get("/votes/:id", votesControllers.getReactionsByUserId);

module.exports = router;
