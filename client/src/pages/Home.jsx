import React from "react";
import Layout from "../components/Layout";
import CategoryDisplay from "../components/CategoryDisplay";
import signup from "../assets/signup.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className="w-full h-screen">
        <img
          src="https://img3.thuthuatphanmem.vn/uploads/2019/10/14/banner-thoi-trang-viet-nam_113858319.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mx-24">
        <div className="grid grid-cols-2 rounded-lg overflow-hidden h-screen my-20">
          <div className="bg-[url(/src/assets/bg.png)] bg-no-repeat px-16 py-44 bg-cover">
            <h2 className="font-bold text-4xl text-white mb-8">
              WE MADE YOUR EVERYDAY FASHION BETTER!
            </h2>
            <p className="text-white font-light text-xl mb-12">
              In our journey to improve everyday fashion, euphoria presents
              EVERYDAY wear range - Comfortable & Affordable fashion 24/7
            </p>
            <Link
              to={"/shop"}
              className="bg-white text-#3C4242 px-11 py-3 rounded-lg"
            >
              Mua sắm
            </Link>
          </div>

          <img src={signup} className="" alt="" />
        </div>
        <CategoryDisplay />
      </div>
    </Layout>
  );
};

export default Home;
