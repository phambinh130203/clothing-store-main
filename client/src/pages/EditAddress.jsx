import React, { useContext, useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { Link, useNavigate, useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import Layout from "../components/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { StoreContext } from "../context/StoreContext";

const EditAddress = () => {
  const { fetchUser } = useContext(StoreContext);

  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    country: "",
    city: "",
    state: "",
    streetAddress: "",
    apartment: "",
    mobile: "",
    deliInstruction: "",
  });
  const editAddress = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `http://localhost:3003/address/update/${id}`,
        data,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      fetchUser();
      toast.success(res.data.message);
      navigate("/info");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const onChangeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3003/address/${id}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data.address))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Layout>
      <div className="flex gap-x-12 mx-24 my-10">
        <SideBar />
        <div className="w-full">
          <h1 className="font-bold text-3xl text-#3C4242 mb-5">Thông tin cá nhân</h1>
          <p className="font-bold text-xl text-#3C4242">Chỉnh sửa địa chỉ</p>
          <form
            onSubmit={editAddress}
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
                value={data.firstname}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
              Tên
              </label>
              <input
                required
                value={data.lastname}
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
                value={data.country}
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
                value={data.city}
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
                value={data.state}
                onChange={onChangeHandle}
                name="state"
                type="text"
                placeholder="Huyện"
                className="bg-#F6F6F6 outline-none px-5 py-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-#3C4242 text-lg font-semibold">
                Tên Đường
              </label>
              <input
                required
                value={data.streetAddress}
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
                value={data.apartment}
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
                value={data.mobile}
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
                value={data.deliInstruction}
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

export default EditAddress;
