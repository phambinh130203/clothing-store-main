const {
  create_product,
  findAllProduct,
  findProductById,
  delete_product,
  update_product,
} = require("../service/product.service.js");

const createProduct = async (req, res) => {
  try {
    const image = req.file.filename;

    await create_product(req.body, image);

    res
      .status(201)
      .json({ success: true, message: "Tạo sản phẩm thành công" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error" });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await findAllProduct();
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await findProductById(id);

    res.status(200).json({ success: true, product });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ success: false, message: "Error" });
  }
};

const deleteProductById = async (req, res) => {
  try {
    await delete_product(req.body._id);
    res
      .status(200)
      .json({ success: true, message: "Xóa sản phẩm thành công" });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ success: false, message: "Error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await findProductById(id)
    const image = req.file ? req.file.filename : product.image
    
    await update_product(id,req.body, image);
    res
      .status(200)
      .json({ success: true, message: "Cập nhật thành công" });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ success: false, message: error.message});
  }
};
module.exports = {
  createProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProductById,
};
