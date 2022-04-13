const { blogService } = require("../service");

const {
  createBlogByID,
  getBlogDetails,
  // getBlogCount,
  getBlogByIndId,
  UpdateBlogById,
  dropBlogById,
  searchBlogBytitle,
} = blogService;

const createBlog = async (req, res) => {
  try {
    const data = req.body;
    const result = await createBlogByID(data);
    return res.status(200).send(result);
  } catch (error) {
    console.log("err");
  }
};

const getBlog = async (req, res) => {
  try {
    // const count = await getBlogCount();
    const result = await getBlogDetails({ ...req.query });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).send("err");
  }
};

const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getBlogByIndId(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).send("err");
  }
};

const UpdateBlog = async (req, res) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const result = await UpdateBlogById(id, data);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

const dropBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await dropBlogById(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).send("err");
  }
};

const searchBlog = async (req, res) => {
  try {
    const result = await searchBlogBytitle();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).send("err");
  }
};

module.exports = {
  createBlog,
  getBlog,
  getBlogById,
  UpdateBlog,
  dropBlog,
  searchBlog,
};
