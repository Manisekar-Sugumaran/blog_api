const { tagService } = require("../service");

const { getTagById } = tagService;

const getTag = async (req, res) => {
  try {
    // const { id } = req.params;
    const result = await getTagById();
    return res.status(200).json(result);
  } catch (error) {
    console.log("err");
  }
};

module.exports = {
  getTag,
};
