const { cloudinary } = require("../utils/cloudinary");

const complainService = async ({
  address,
  ward,
  description,
  imgUrls,
  type,
}) => {
  try {
    console.log("imgUrls", imgUrls);
    const promises = [];
    imgUrls.forEach(async (img) => {
      const response = await cloudinary.uploader.upload({});
      promises.push(response);
    });
    const res = await Promise.all(promises);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  complainService,
};
