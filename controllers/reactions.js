const {
  putVotes,
  getVotesByUserId,
  postComment,
  getCommentsByComplainId,
  getVotesByComplainId,
  getCurrentUsersVote,
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

const getVotes = async (req, res, next) => {
  const { cid, uid } = req.query;
  try {
    const data = await getVotesByComplainId(cid);
    let result = await getCurrentUsersVote(cid, uid);
    if (result === null) {
      result = {
        citizen_id: uid,
        complain_id: cid,
        downvote: false,
        upvote: false,
      };
    }
    return res.status(201).json([data, result]);
  } catch (error) {}
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
  try {
    if (comment.comment) {
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
  getVotes,
};
