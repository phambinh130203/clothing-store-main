import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import SideBar from "../components/SideBar";
import { Link, useNavigate, useParams } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import axios from "axios";
import { toast } from "react-toastify";
import { StoreContext } from "../context/StoreContext";
const Address = () => {
  const {fetchUser} = useContext(StoreContext)
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastname : "",
    country: "",
    city: "",
    state: "",
    streetAddress: "",
    apartment: "",
    mobile: "",
    deliInstruction: "",
  });

  const onChangeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const createAddress = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3003/address/create",
        data,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      fetchUser()
      toast.success(res.data.message);
      navigate("/info");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <Layout>
      <div className="flex gap-x-12 mx-24 my-10">
        <SideBar />
        <div className="w-full">
          <h1 className="font-bold text-3xl text-#3C4242 mb-5">Thông tin cá nhân</h1>
          <p className="font-bold text-xl text-#3C4242">Thêm địa chỉ</p>
          <form
            onSubmit={createAddress}
            className="grid grid-cols-2 gap-10 mt-12"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
                Họ
              </label>
              <input
                onChange={onChangeHandle}
                type="text"
                name="firstname"
                placeholder="Họ"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
                Tên
              </label>
              <input
                required
                onChange={onChangeHandle}
                name="lastname"
                type="text"
                placeholder="Tên"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
              Quốc gia
              </label>
              <input
                required
                onChange={onChangeHandle}
                name="country"
                type="text"
                placeholder="Quốc gia"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
               Thành phố
              </label>
              <input
                required
                onChange={onChangeHandle}
                name="city"
                type="text"
                placeholder="Thành phố"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
              Huyện
              </label>
              <input
                required
                onChange={onChangeHandle}
                name="state"
                type="text"
                placeholder="Huyện"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
              Tên đường
              </label>
              <input
                required
                onChange={onChangeHandle}
                name="streetAddress"
                type="text"
                placeholder="Tên đường*"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
                Quận
              </label>
              <input
                required
                onChange={onChangeHandle}
                name="apartment"
                type="text"
                placeholder="Quận"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
               Số điện thoại
              </label>
              <input
                required
                onChange={onChangeHandle}
                name="mobile"
                type="tel"
                placeholder="Số điện thoại"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2 col-span-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
                Địa chỉ nhận hàng
              </label>
              <textarea
                onChange={onChangeHandle}
                name="deliInstruction"
                type="text"
                placeholder="Địa chỉ nhận hàng"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
              />
            </div>
            <div className="flex gap-7 text-xl font-bold">
              <PrimaryButton title={"Lưu"} type={"submit"} />
              <Link
                to="/info"
                className="py-3 px-10 active:opacity-80 bg-#F6F6F6 text-#807D7E  rounded-lg"
              >
              Hủy
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Address;
