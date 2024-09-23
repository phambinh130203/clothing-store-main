const {
  update_cartItem,
  remove_cartItem,
} = require("../service/cartItem.service");

const updateCartItem = async (req, res) => {
  try {
    const { userId } = req.body;

    await update_cartItem(userId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Đã cập nhật" });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ success: false, message: error });
  }
};

const removeCartItem = async (req, res) => {
  try {
    const { userId } = req.body;

    await remove_cartItem(userId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Đã xóa" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error });
  }
};
module.exports = { updateCartItem, removeCartItem };
