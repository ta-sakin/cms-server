const { putUpvotes, getVotesByUserId } = require("../service/reactionsDbOp");

const updateUpvote = async (req, res, next) => {
  const data = req.body;
  try {
    const result = await putUpvotes(data);
    console.log("upvote", result);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

const getReactionsByUserId = async (req, res, next) => {
  const id = req.params.id;
  try {
    const data = await getVotesByUserId(id);
    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { updateUpvote, getReactionsByUserId };
