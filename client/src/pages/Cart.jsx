import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import formatPrice from "../utils/FormatPrice";
import { StoreContext } from "../context/StoreContext";

const Cart = () => {
  const { cart, user, fetchCart } = useContext(StoreContext);
  useEffect(() => {
    fetchCart();
  }, [cart]);
  const cartItem = cart.cartItem;
  return (
    <Layout>
      <div className={`${cartItem?.length !== 0 ? "block" : "hidden"}`}>
        <div
          className={`${
            localStorage.getItem("token") ? "hidden" : "block"
          } text-#807D7E text-sm mx-24 my-10`}
        >
          <p>
            Please fill in the fields below and click place order to complete
            your purchase!
          </p>
          <p>
            Already registered?
            <Link className="text-#8A33FD" to={`/signin`}>
              Please login here
            </Link>
          </p>
        </div>

        <div>
          <div className="bg-#3C4242 text-center text-white text-lg font-semibold grid grid-cols-8 px-24 py-6">
            <p className="col-span-3 text-left">Thông tin sản phẩm</p>
            <p>Giá</p>
            <p>Số lượng</p>
            <p>Phí ship</p>
            <p>Tổng</p>
            <p>Xóa</p>
          </div>
          <div className="mx-24">
            {cartItem?.map((item) => (
              <CartItem item={item} />
            ))}
          </div>
        </div>

        <div className="flex justify-between px-24 py-7 bg-#F6F6F6">
          <div>
            <h2 className="font-semibold text-2xl text-#3C4242">
              Mã giảm giá
            </h2>
            <p className="text-#807D7E mt-2 mb-10">
              Nhập mã nếu có
            </p>
            <div className="rounded-xl border-2 overflow-hidden bg-white mb-10">
              <input className="bg-white px-3 outline-none" type="text" />
              <button className="px-8 py-3 bg-#8A33FD active:opacity-80 text-white">
               Áp dụng
              </button>
            </div>
            <Link
              to={"/shop"}
              className="px-8 py-3 hover:bg-#8A33FD bg-white hover:text-white text-#3C4242 font-semibold rounded-xl border-2"
            >
              Tiếp tục mua sắm
            </Link>
          </div>

          <div className="bg-#EDEEF2 px-20 py-10 flex flex-col items-center justify-between">
            <div className="grid grid-cols-2 gap-20 place-items-center pb-6 border-b border-#3C4242">
              <div className="grid grid-rows-3 text-#3C4242 font-medium text-xl">
                <p className="font-bold mt-5">Tổng tiền</p>
              </div>
            </div>
            <Link
              to={"/checkout"}
              className="active:opacity-85 bg-#8A33FD px-8 py-3 mt-4 text-white rounded-lg"
            >
              Thanh toán
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          cartItem?.length === 0 ? "flex" : "hidden"
        } flex-col bg-#F6F6F6 items-center gap-3 py-16`}
      >
        <img src="images/empty-cart.png" alt="" />
        <h1 className="font-bold text-4xl ">Chưa có sản phẩm nào</h1>
      </div>
    </Layout>
  );
};

export default Cart;
