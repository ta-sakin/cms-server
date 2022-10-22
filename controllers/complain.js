const { complainService } = require("../service/complain");

const complainControllers = async (req, res, next) => {
  // const complain = req.body;
  const { address, ward, description, imgUrls, type } = req.body;
  if (!address || !ward || !description) {
    return res.status(400).json({ message: "Invalid information" });
  }

  console.log("data", req.body);
  try {
    const result = await complainService(req.body);
    res.status(201).json({ message: "Submission successful", result });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { complainControllers };
