import React, { useContext, useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import { AdminContext } from "../../context/AdminContext";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import formatPrice from "../../utils/FormatPrice";

const ListCustomer = () => {
  const { users, fetchUsers } = useContext(AdminContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, users]);

  const handleRemove = async (id) => {
    try {
      const res = await axios.delete("http://localhost:3003/user/delete", {
        data: {
          id: id,
        },
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Yjc3ZGJlZmZjYmFmMDM1YjhlNTQyMSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcyMzgyMDc0MX0.3ADoS7sGJxfbmZy6GJgF8j0e5Dbxteje-XSzuB-oYnI",
        },
      });
      fetchUsers();
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="w-full px-6 py-8">
        <div className="mb-6">
          <h1 className="font-bold text-3xl text-gray-800">Tài khoản</h1>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="grid grid-cols-6 bg-gray-100 px-5 py-3 font-semibold text-gray-600">
            <p className="col-span-2">Tên</p>
                <p>Trạng thái</p>
          </div>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                className="grid grid-cols-6 border-b py-3 px-5 hover:bg-gray-50 transition-all"
                key={user._id}
              >
                <div className="col-span-2 flex flex-col gap-1">
                  <p className="text-lg font-medium text-gray-800">{`${user.firstname} ${user.lastname}`}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
                <div className="flex gap-3 justify-center">
                  <Link
                    to={`/customers/${user._id}`}
                    className="flex items-center text-blue-600 bg-blue-100 px-3 py-2 rounded-lg hover:bg-blue-200 transition-all"
                  >
                    <FaEdit />
                    <p className="ml-2">Sửa</p>
                  </Link>
                  <button
                    onClick={() => handleRemove(user._id)}
                    className="flex items-center text-red-600 bg-red-100 px-3 py-2 rounded-lg hover:bg-red-200 transition-all"
                  >
                    <AiOutlineClose />
                    <p className="ml-2">Xóa</p>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-5 text-center text-gray-500">
              Không tìm thấy
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListCustomer;
