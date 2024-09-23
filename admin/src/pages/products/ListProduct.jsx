import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar";
import formatPrice from "../../utils/FormatPrice";
import { FaEdit } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";

const ListProduct = () => {
  const { products, fetchProducts } = useContext(AdminContext);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState([]); 

  useEffect(() => {
    fetchProducts(); 
  }, []);
  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  const handleRemove = async (id) => {
    try {
      const res = await axios.delete("http://localhost:3003/product/delete", {
        data: {
          _id: id,
        },
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Yjc3ZGJlZmZjYmFmMDM1YjhlNTQyMSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcyMzgyMDc0MX0.3ADoS7sGJxfbmZy6GJgF8j0e5Dbxteje-XSzuB-oYnI",
        },
      });
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="w-full px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-3xl text-gray-800">Sản phẩm</h1>
          <Link
            to={"/products/add"}
            className="font-semibold text-white rounded-lg bg-indigo-600 px-5 py-2 shadow-md hover:bg-indigo-700 transition-all duration-200"
          >
            + Thêm
          </Link>
        </div>

      
        <div className="mb-4">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="grid grid-cols-6 bg-gray-100 px-5 py-3 font-semibold text-gray-600">
            <p className="col-span-2">Tên</p>
            <p>Kho</p>
            <p>Giá</p>
            <p>Chỉnh sửa</p>
          </div>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="grid grid-cols-6 border-b items-center py-3 px-5 hover:bg-gray-50 transition-all" key={product._id}>
                <div className="col-span-2 flex gap-3 items-center">
                  <img
                    className="w-16 h-16 object-cover rounded-lg"
                    src={`http://localhost:3003/${product.image}`}
                    alt={product.title}
                  />
                  <div>
                    <p className="text-lg font-medium text-gray-800">{product.title}</p>
                    <p className="text-sm text-gray-500">{product.brand}</p>
                  </div>
                </div>
                <p className="text-gray-700">{product.quantity} trong kho</p>
                <div>
                  <p className="text-sm text-gray-500 line-through">Giá {formatPrice(product.price)}</p>
                </div>
                <div className="flex gap-2 justify-center">
                  <Link
                    to={`/products/edit/${product._id}`}
                    className="flex items-center text-blue-600 bg-blue-100 px-3 py-2 rounded-lg hover:bg-blue-200 transition-all"
                  >
                    <FaEdit />
                    <p className="ml-2">Sửa</p>
                  </Link>
                  <button
                    onClick={() => handleRemove(product._id)}
                    className="flex items-center text-red-600 bg-red-100 px-3 py-2 rounded-lg hover:bg-red-200 transition-all"
                  >
                    <AiOutlineClose />
                    <p className="ml-2">Xóa</p>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-5 text-center text-gray-500">Không tìm thấy sản phẩm nào</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
