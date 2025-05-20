import React from "react";
import { useLoaderData } from "react-router";

const Details = () => {
  const groupData = useLoaderData();

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-gradient-to-br from-white via-gray-100 to-indigo-100 border border-gray-200 shadow-xl rounded-2xl p-6 sm:p-10">
          <div className="flex flex-col items-center text-center">
            <img
              src={groupData.imageUrl}
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
            />
            <h1 className="text-2xl sm:text-3xl font-semibold text-indigo-700 mt-4">
              {groupData.groupName}
            </h1>
            <p className="text-sm sm:text-base text-gray-500 mt-1 italic">
              {groupData.hobbyCategory}
            </p>
            <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl leading-relaxed">
              {groupData.description}
            </p>
          </div>

          <hr className="my-8 border-gray-300" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 text-sm sm:text-base text-gray-700">
            <div className="text-center sm:text-left">
              <p className="font-semibold text-gray-800 mb-1">
                Meeting Location
              </p>
              <p>{groupData.meetingLocation}</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-semibold text-gray-800 mb-1">Start Date</p>
              <p>{groupData.startDate}</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-semibold text-gray-800 mb-1">Max Members</p>
              <p>{groupData.maxMembers}</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-semibold text-gray-800 mb-1">Organizer</p>
              <p>{groupData.userName}</p>
            </div>
            <div className="text-center sm:text-left sm:col-span-2">
              <p className="font-semibold text-gray-800 mb-1">Contact Email</p>
              <p>{groupData.userEmail}</p>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <button className="cursor-pointer px-6 py-2 sm:px-8 sm:py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-medium rounded-md shadow transition-all duration-300">
              Join Group
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
