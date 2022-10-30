const { complainService } = require("../service/complain");
const {
  getComplains,
  putVotes,
  updateComplainsReactions,
} = require("../service/complainsFunc");
var natural = require("natural");

const submitComplain = async (req, res, next) => {
  let { address, ward, description, imgUrls, type, phone } = req.body;
  const user = req.user;
  if (!imgUrls) imgUrls = [];
  if (!address || !ward || !description) {
    return res.status(400).json({ message: "Invalid information" });
  }

  let complainType;
  if (type.publicSubmit) {
    complainType = "public";
    if (type.anonymous) {
      complainType = "public-anonymous";
    }
  } else {
    complainType = "private";
  }

  const classifyComplain = async (description, callback) => {
    var classifier = new natural.BayesClassifier();
    natural.BayesClassifier.load(
      "classifier.json",
      null,
      function (err, classifier) {
        const category = classifier.classify(description);
        return callback(category);
      }
    );
  };

  classifyComplain(description, async function (category) {
    try {
      const data = await complainService({
        citizen_id: user._id,
        address,
        ward,
        description,
        imgUrls,
        complainType,
        phone,
        category,
      });
      if (data) {
        return res.status(201).json({ message: "Submission successful", data });
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  });
};

const getAllComplains = async (req, res, next) => {
  try {
    const data = await getComplains();
    return res.status(201).json({ message: "Successful", data });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateComplain = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await updateComplainsReactions(data);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  submitComplain,
  getAllComplains,
  updateComplain,
};
