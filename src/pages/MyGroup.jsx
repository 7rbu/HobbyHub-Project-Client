import React, { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const MyGroup = () => {
  const { loginUser } = useContext(AuthContext);
  const [group, setGroup] = useState([]);

  useEffect(() => {
    fetch(
      `https://papaya-server.vercel.app/creategroup/mygroup/${loginUser?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setGroup(data);
      });
  }, [loginUser]);



  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result.isConfirmed);
        fetch(`https://papaya-server.vercel.app/creategroup/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingData = group.filter((user) => user._id !== id);
              setGroup(remainingData);
            }
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Group Delete",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    });
  };

  return (
    <>
      <div className="overflow-x-auto mt-10 lg:px-4">
        <div className="inline-block min-w-full shadow-lg rounded-xl overflow-hidden">
          <table className="min-w-full bg-white text-sm text-gray-700 text-center">
            <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white uppercase tracking-wider">
              <tr>
                <th className="px-1 py-3 lg:px-6 lg:py-4 font-semibold">
                  Image
                </th>
                <th className="px-1 py-3 lg:px-6 lg:py-4 font-semibold">
                  Name
                </th>
                <th className="px-1 py-3 lg:px-6 lg:py-4 font-semibold">
                  Category
                </th>
                <th className="px-1 py-3 lg:px-6 lg:py-4 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {group?.map((group) => (
                <tr
                  key={group._id}
                  className="hover:bg-gray-50 transition duration-150"
                >
                  <td className="px-1 py-3 lg:px-6 lg:py-4 flex justify-center">
                    <div className="w-14 h-14">
                      <img
                        src={group.imageUrl}
                        alt="Group"
                        className="w-full h-full object-cover rounded-md border border-gray-300"
                      />
                    </div>
                  </td>
                  <td className="px-1 py-3 lg:px-6 lg:py-4 font-medium text-gray-900">
                    {group.groupName}
                  </td>
                  <td className="px-1 py-3 lg:px-6 lg:py-4 text-gray-700">
                    {group.hobbyCategory}
                  </td>
                  <td className="px-1 py-3 lg:px-6 lg:py-4">
                    <div className="flex justify-center gap-1 lg:gap-3">
                      <Link to={`/mygroup/update/${group._id}`}>
                        <button className="cursor-pointer flex items-center gap-2 px-2 py-2 lg:px-4 lg:py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-200">
                          <FaEdit className="text-white text-base" />
                          <span>Update</span>
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(group._id)}
                        className="cursor-pointer flex items-center gap-2 px-2 py-2 lg:px-4 lg:py-2 text-sm font-medium text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-200"
                      >
                        <FaTrashAlt className="text-white text-base" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {group.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="px-1 py-3 lg:px-6 lg:py-4 text-center text-gray-500"
                  >
                    No groups found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyGroup;
