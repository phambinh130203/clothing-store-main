import React, { useContext, useState } from "react";
import HeaderAuth from "../components/HeaderAuth";
import { Link, useNavigate } from "react-router-dom";
import signup from "../assets/signup.png";
import axios from "axios";
import { toast } from "react-toastify";
import PrimaryButton from "../components/PrimaryButton";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3003/auth/register", {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
      localStorage.setItem("token","Bearer "+ res.data.token);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <HeaderAuth />
      <div className="flex gap-16">
        <img src={signup} alt="" className="h-screen" />
        <div className="w-full px-20 py-5">
          <h1 className="font-bold text-5xl text-#333333 mb-3">Đăng ký</h1>
          <p className="mb-5 text-#807D7E">
           Đăng ký miễn phí để trải nghiệm mua sắm
          </p>
          <form onSubmit={handleSignup} className="flex flex-col gap-5 text-#3C4242">
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg  mb-2">
              Họ
              </label>
              <input
                type="text"
                required
                onChange={(e) => setFirstName(e.target.value)}
                className="border-2 rounded-lg py-3 px-5 w-full outline-none "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg  mb-2">
                Tên
              </label>
              <input
                type="text"
                required
                onChange={(e) => setLastName(e.target.value)}
                className="border-2 rounded-lg py-3 px-5 w-full outline-none "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg  mb-2">
                Email 
              </label>
              <input
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 rounded-lg py-3 px-5 w-full outline-none "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg  mb-2">
                Mật khẩu
              </label>
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 rounded-lg py-3 px-5 w-full outline-none "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-lg  mb-2">
                Xác nhận mật khẩu
              </label>
              <input
                type="password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-2 rounded-lg py-3 px-5 w-full outline-none "
              />
            </div>
            <div>
              <PrimaryButton type={'submit'} title={"Đăng ký"}  />
            </div>
            <p>
              Bạn đã có tài khoản?{" "}
              <Link to={"/signin"} className="underline hover:text-#8A33FD">
              Đăng nhập
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
