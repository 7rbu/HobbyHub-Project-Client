import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";

const AllGroups = () => {
  const [allGroup, setAllGroup] = useState([]);

  const group = useLoaderData();

  useEffect(() => {
    setAllGroup(group);
  }, [group]);

  console.log(allGroup);

  return (
    <>
      <div className="overflow-x-auto mt-10 lg:px-4">
        <div className="w-full inline-block shadow-lg rounded-xl overflow-hidden">
          <table className="w-full bg-white text-sm text-gray-700 text-center">
            <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white uppercase tracking-wider">
              <tr className="">
                <th className="font-semibold px-1 py-3 lg:px-6 lg:py-4">
                  Image
                </th>
                <th className="font-semibold px-1 py-3 lg:px-6 lg:py-4">
                  Name
                </th>
                <th className="font-semibold px-1 py-3 lg:px-6 lg:py-4">
                  Category
                </th>
                <th className="font-semibold px-1 py-3 lg:px-6 lg:py-4">
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
                  <td className="flex justify-center px-1 py-3 lg:px-6 lg:py-4">
                    <div className="w-14 h-14">
                      <img
                        src={group.imageUrl}
                        className="w-full h-full object-cover rounded-md border border-gray-300"
                      />
                    </div>
                  </td>
                  <td className="font-medium text-gray-900 px-1 py-3 lg:px-6 lg:py-4">
                    {group.groupName}
                  </td>
                  <td className=" text-gray-700 px-1 py-3 lg:px-6 lg:py-4">
                    {group.hobbyCategory}
                  </td>
                  <td className="px-1 py-3 lg:px-6 lg:py-4">
                    <div className="flex justify-center gap-2">
                      <Link to={`/allgroups/details/${group._id}`}>
                        <button className="cursor-pointer px-1 py-2 lg:px-4 lg:py-2 text-xs font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 hover:scale-110 transition duration-500">
                          See More
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
              {group.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center text-gray-500 px-1 py-3 lg:px-6 lg:py-4"
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

export default AllGroups;
