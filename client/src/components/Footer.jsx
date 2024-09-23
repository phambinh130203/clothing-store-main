import React from "react";
import { FaFacebookF, FaGooglePlay, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="px-44">
        <div className="flex justify-between mb-3">
          <div>
            <h2 className="font-bold mb-4 text-2xl">VỀ CHÚNG TÔI</h2>
            <p>EUROPHIA luôn tỉ mỉ lựa chọn các sản phẩm của mình.</p>
            <p>Mỗi một thiết kế đều là một sản phẩm chất lượng.</p>

            <div className="flex justify-between items-end mt-10">
              <div className="flex gap-3">
                <div className="rounded-lg text-gray-800 p-3 bg-white">
                  <a href="https://www.facebook.com/facebook"><FaFacebookF /></a>
                </div>
                <div className="rounded-lg text-gray-800 p-3 bg-white">
                  <a href="https://www.instagram.com/instagram/"> <FaInstagram /></a>
                </div>
                <div className="rounded-lg text-gray-800 p-3 bg-white">
                  <a href="https://x.com/?lang-en="> <FaTwitter /></a>
                </div>
                <div className="rounded-lg text-gray-800 p-3 bg-white">
                  <a href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="font-bold mb-4 text-2xl">THÔNG TIN LIÊN HỆ</h2>
            <ul className="flex flex-col text-lg gap-3">
              <li className="flex items-center"> <FaPhoneAlt className="mr-2"/> CSKH: 098154637</li>
              <li className="flex items-center"><FaHome className="mr-2" /> Mua hàng: 19008745</li>
              <li className="flex items-center"><MdEmail className="mr-2"/> Email: Europhia.support@gmail.com</li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center">
            <h4 className="font-bold mb-2">TẢI ỨNG DỤNG</h4>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/qr.png" alt="qr" className="h-20" />
              <div className="flex flex-col space-y-1 h-20 justify-center">
                <a href="#"><img src="/images/googleplay.png" alt="Google Play" className="w-28" /></a>
                <a href="#"><img src="/images/appstore.png" alt="App Store" className="w-28" /></a>
              </div>
            </div>
            
            <h4 className="font-bold mb-2 text-center">PHƯƠNG THỨC THANH TOÁN</h4>
            <div className="grid grid-cols-5 gap-x-2 gap-y-0">
              <div className="p-1 bg-white rounded-lg">
                <img src="/images/shoppepng.png" alt="Tiền mặt" className="w-8" />
              </div>
              <div className="p-1 bg-white rounded-lg">
                <img src="/images/shopepay.png" alt="Bank Transfer" className="w-8" />
              </div>
              <div className="p-1 bg-white rounded-lg">
                <img src="/images/visa.png" alt="Visa" className="w-8" />
              </div>
              <div className="p-1 bg-white rounded-lg">
                <img src="/images/card.png" alt="MasterCard" className="w-8" />
              </div>
              <div className="p-1 bg-white rounded-lg">
                <img src="/images/jcb.png" alt="JCB" className="w-8" />
              </div>
              <div className="p-1 bg-white col-span-1 rounded-lg">
                <img src="/images/tragop.png" alt="VNPay" className="w-8" />
              </div>
              <div className="p-1 bg-white col-span-1 rounded-lg">
                <img src="/images/thanhtoan.png" alt="ShopeePay" className="w-8" />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center">Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
