const { findUserCart, addCartItem } = require("../service/cart.service");

const getCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const cart = await findUserCart(userId);

    res.status(200).json({ success: true, cart });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ success: false, message: error.message });
  }
};

const addToCart = async (req, res) => {
  try {
    const { userId } = req.body;

    await addCartItem(userId, req.body);

    res
      .status(200)
      .json({ success: true, message: "Thêm sản phẩm thành công" });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ success: false, message: error.message });
  }
};
module.exports = { getCart, addToCart };
