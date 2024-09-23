import React from "react";
import Layout from "../components/Layout";

const chinhsach = () => {
  return (
    <Layout>
      <div style={{ padding: '100px' }}>
        <div style={{ 
          whiteSpace: "pre-wrap", 
          fontFamily: "inherit", 
          fontSize: "inherit",
          lineHeight: '1.5'
        }}>
          <p className="text-3xl"><b>CHÍNH SÁCH ĐỔI TRẢ </b></p>

          <br/><br/>
          <strong>1. CHÍNH SÁCH ĐỔI SẢN PHẨM</strong>

          <br/><br/>
          <strong>a. Đổi size</strong>

          <br/><br/>
          – Áp dụng 01 lần đổi /1 đơn hàng với các đơn hàng mua online và các đơn hàng mua tại cửa hàng.
          <br/>
          – Sản phẩm đổi trong thời gian 3 ngày kể từ ngày mua hàng trên hoá đơn (đối với khách mua hàng trực tiếp tại cửa hàng), 3 ngày kể từ ngày nhận hàng (Đối với khách mua online).
          <br/>
          – Sản phẩm còn mới nguyên tem, tags và mang theo hoá đơn mua hàng, sản phẩm chưa giặt và không dơ bẩn, hư hỏng bởi những tác nhân bên ngoài cửa hàng sau khi mua hàng.
          <br/>
          – Không áp dụng đối với các sản phẩm là phụ kiện.

          <br/><br/>
          <strong>b. Đổi sản phẩm lỗi</strong>

          <br/><br/>
          Điều kiện áp dụng
          <br/>
          – Sản phẩm lỗi kỹ thuật: Sản phẩm rách, bung keo, …
          <br/><br/>
          Trường hợp không được giải quyết
          <br/>
          – Sản phẩm đã qua sử dụng.
          <br/><br/>
          Đối với sản phẩm lỗi kỹ thuật cần phản hồi đến shop trong vòng 3 ngày, kể từ ngày mua hàng trên hoá đơn đối với khách mua trực tiếp tại cửa hàng, 3 ngày kể từ ngày nhận hàng đối với khách mua online. 

          <br/><br/>
          <strong>2. PHƯƠNG THỨC ĐỔI SẢN PHẨM</strong>

          <br/><br/>
          – Hàng mua trực tiếp tại cửa hàng: Đổi trả trực tiếp tại cửa hàng mua hàng.
          <br/>
          – Hàng mua online (thông qua website, Shopee, Lazada): liên hệ fanpage shop để được hướng dẫn đổi trả.

          <br/><br/>
          <strong>3. CHI PHÍ ĐỔI HÀNG</strong>

          <br/><br/>
          – Miễn phí đổi hàng cho khách mua ở shop trong trường hợp bị lỗi từ nhà sản xuất, giao nhầm hàng, bị hư hỏng trong quá trình vận chuyển hàng.
          <br/>
          – Trong trường hợp không vừa size hay khách hàng không ưng sản phẩm không muốn nhận hàng, phiền khách hàng trả ship hoàn đơn hàng về.
      <br/><br/>
        <p className="text-xl"><b>EUPHORIA</b></p>
        </div>
      </div>
    </Layout>
  );
};

export default chinhsach;