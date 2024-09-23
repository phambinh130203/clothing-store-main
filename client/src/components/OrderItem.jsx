import React from "react";
import formatPrice from "../utils/FormatPrice";
import formatDate from "../utils/FormatDate";

import { Link } from "react-router-dom";
const OrderItem = ({item}) => {
  const firstItem = item && item.orderItems ? item.orderItems[0]: ''
  
  return (
    <div className="py-7 border-b-2">
      <div className="bg-#F6F6F6 rounded-lg py-7 px-11 mb-7">
        <h2 className="font-semibold text-xl text-#3C4242">
          ID đơn hàng: {item._id}
        </h2>
        <div className="grid grid-cols-2 text-#807D7E text-sm mt-3 font-medium">
          <p>
            Ngày đặt :{" "}
            <span className="text-#BEBCBD font-normal">
            {formatDate(item.orderDate)}
            </span>
          </p>
          <p>
            Ngày giao dự kiến :{" "}
            <span className="text-#BEBCBD font-normal">{formatDate(item.deliveryDate)}</span>{" "}
          </p>
          <p>
            Trạng thái đơn hàng :{" "} 
            <span className="text-#BEBCBD font-normal">{item.orderStatus}</span>{" "}
          </p>
          <p>
            Phương thức thanh toán :{" "}
            <span className="text-#BEBCBD font-normal">{item.paymentDetails.method}</span>{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-6">
          <img src={`http://localhost:3003/${firstItem.product?.image}`} className="w-20 h-24" alt="" />
          <div className="font-semibold text-#3C4242">
            <p>{firstItem.product?.title}</p>
            <p>
              Màu : <span className="text-#807D7E">{firstItem.color}</span>{" "}
            </p>
            <p>
              Số lượng : <span className="text-#807D7E">{firstItem.quantity}</span>
            </p>
            <p>
            Tổng : <span className="text-#807D7E">{formatPrice((firstItem.price)*firstItem.quantity)}</span>
            </p>
          </div>
        </div>
        <Link to={`/order/${item._id}`} className="px-7 py-3 bg-#8A33FD rounded-lg text-white font-medium text-lg">Thông tin</Link>
      </div>
    </div>
  );
};

export default OrderItem;
