const {
  putVotes,
  getVotesByUserId,
  postComment,
  getCommentsByComplainId,
} = require("../service/reactionsDbOp");

const updateVote = async (req, res, next) => {
  const data = req.body;
  try {
    const result = await putVotes(data);
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

const createCommment = async (req, res, next) => {
  const comment = req.body;
  console.log(comment);
  try {
    if (comment) {
      const data = await postComment(comment);
      return res.status(201).json(data);
    }
  } catch (error) {
    console.log(error);
  }
};

const getComments = async (req, res, next) => {
  const complainId = req.params.id;
  try {
    const data = await getCommentsByComplainId(complainId);
    return res.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  updateVote,
  getReactionsByUserId,
  createCommment,
  getComments,
};
