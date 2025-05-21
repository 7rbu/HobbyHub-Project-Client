import React, { useState } from "react";

const FeaturedGroup = ({ group }) => {
  const {
    imageUrl,
    groupName,
    hobbyCategory,
    description,
    meetingLocation,
    startDate,
    maxMembers,
    userName,
    userEmail,
  } = group;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-center justify-center bg-indigo-50 p-8">
          <img
            src={imageUrl}
            className="w-24 h-24 object-contain rounded-full border border-indigo-300"
          />
        </div>

        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900">{groupName}</h2>
          <p className="text-indigo-600 font-semibold mt-1">{hobbyCategory}</p>

          <div className="mt-4 text-gray-700 text-sm">
            <p>
              <strong>Meeting Location:</strong> {meetingLocation}
            </p>
            <p>
              <strong>Start Date:</strong>{" "}
              {new Date(startDate).toLocaleDateString("en-GB")}
            </p>
            <p>
              <strong>Max Members:</strong> {maxMembers}
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition"
              onClick={() => setIsModalOpen(true)}
            >
              Open Details
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-opacity-30 backdrop-blur-sm flex items-center justify-center px-4 py-12"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg max-w-lg w-full p-8 shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-extrabold transition focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close Modal"
            >
              &times;
            </button>

            <h2
              id="modal-title"
              className="text-3xl font-extrabold text-gray-900 mb-6 text-center"
            >
              {groupName}
            </h2>

            <img
              src={imageUrl}
              className="w-28 h-28 mx-auto rounded-full mb-6 border-4 border-indigo-300 object-contain shadow"
              loading="lazy"
            />

            <div className="text-gray-800 text-base space-y-6">
              <section>
                <h3 className="font-semibold text-lg mb-1 border-b border-gray-300 pb-1">
                  Group Details
                </h3>
                <p className="mb-2">
                  <span className="font-semibold">Category:</span>
                  {hobbyCategory}
                </p>
                <p>
                  <span className="font-semibold">Description:</span> <br />
                  {description}
                </p>
              </section>

              <hr className="border-gray-200" />

              <section>
                <h3 className="font-semibold text-lg mb-1 border-b border-gray-300 pb-1">
                  Event Info
                </h3>
                <p>
                  <span className="font-semibold">Meeting Location:</span>
                  {meetingLocation}
                </p>
                <p>
                  <span className="font-semibold">Start Date:</span>
                  {new Date(startDate).toLocaleDateString("en-GB")}
                </p>
                <p>
                  <span className="font-semibold">Max Members:</span>
                  {maxMembers}
                </p>
              </section>

              <hr className="border-gray-200" />

              <section>
                <h3 className="font-semibold text-lg mb-1 border-b border-gray-300 pb-1">
                  Created By
                </h3>
                <p>
                  <span className="font-semibold">{userName}</span> ({userEmail}
                  )
                </p>
              </section>
            </div>

            <div className="mt-8 text-center">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-400"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedGroup;
