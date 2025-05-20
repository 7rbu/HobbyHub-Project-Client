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
      <div className="overflow-x-auto mt-10 px-4">
        <div className="inline-block min-w-full shadow-lg rounded-xl overflow-hidden">
          <table className="min-w-full bg-white text-sm text-gray-700 text-center">
            <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Image</th>
                <th className="px-6 py-4 font-semibold">Group Name</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {group?.map((group) => (
                <tr
                  key={group._id}
                  className="hover:bg-gray-50 transition duration-150"
                >
                  <td className="px-6 py-4 flex justify-center">
                    <div className="w-14 h-14">
                      <img
                        src={group.imageUrl}
                        alt="Group"
                        className="w-full h-full object-cover rounded-md border border-gray-300"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {group.groupName}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {group.hobbyCategory}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <Link to={`/allgroups/details/${group._id}`}>
                        <button className="cursor-pointer px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-150">
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
                    className="px-6 py-8 text-center text-gray-500"
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
