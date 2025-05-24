import React from "react";
import { useLoaderData } from "react-router";
import ErrorPages from "./ErrorPages";
import Swal from "sweetalert2";
import { Fade, Slide } from "react-awesome-reveal";

const Update = () => {
  const updateGroupData = useLoaderData();

  if (updateGroupData === "error") {
    return <ErrorPages></ErrorPages>;
  }

  const {
    _id,
    groupName,
    hobbyCategory,
    description,
    meetingLocation,
    maxMembers,
    startDate,
    imageUrl,
    userName,
    userEmail,
  } = updateGroupData;

  const handleGroupUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const groupData = Object.fromEntries(formData.entries());

    fetch(`https://papaya-server.vercel.app/creategroup/${_id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groupData),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Update Successful!",
          text: "Group details updated and saved successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-lg p-6 sm:p-8 md:p-10 bg-white dark:bg-gray-900">
        <div className="text-center mb-8">
          <Slide direction="up" cascade triggerOnce>
            <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 hover:scale-110 transition-all duration-800">
              Update Your HobbyHub
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Update your group details to connect better
            </p>
          </Slide>
        </div>

        <Fade duration={1500}>
          <Fade delay={500} cascade damping={0.3}>
            <form onSubmit={handleGroupUpdate} className="space-y-6">
              <div>
                <label
                  htmlFor="groupName"
                  className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                >
                  Group Name
                </label>
                <input
                  id="groupName"
                  type="text"
                  name="groupName"
                  required
                  defaultValue={groupName}
                  placeholder="Enter your group name"
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                />
              </div>

              <div>
                <label
                  htmlFor="hobbyCategory"
                  className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                >
                  Hobby Category
                </label>
                <select
                  id="hobbyCategory"
                  name="hobbyCategory"
                  required
                  defaultValue={hobbyCategory}
                  className="mt-1 w-full px-4 py-3 border border-gray-300 bg-white dark:bg-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out bg-white"
                >
                  <option value="" disabled selected>
                    Select a category
                  </option>
                  <option value="Drawing & Painting">Drawing & Painting</option>
                  <option value="Photography">Photography</option>
                  <option value="Video Gaming">Video Gaming</option>
                  <option value="Fishing">Fishing</option>
                  <option value="Running">Running</option>
                  <option value="Cooking">Cooking</option>
                  <option value="Reading">Reading</option>
                  <option value="Writing">Writing</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  required
                  defaultValue={description}
                  placeholder="What's your group about?"
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                ></textarea>
              </div>
              <div>
                <label
                  htmlFor="meetingLocation"
                  className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                >
                  Meeting Location
                </label>
                <input
                  id="meetingLocation"
                  name="meetingLocation"
                  required
                  defaultValue={meetingLocation}
                  type="text"
                  placeholder="Add a physical or online location"
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="maxMembers"
                    className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                  >
                    Max Members
                  </label>
                  <input
                    id="maxMembers"
                    type="number"
                    name="maxMembers"
                    required
                    min="2"
                    defaultValue={maxMembers}
                    placeholder="e.g., 25"
                    className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                  />
                </div>
                <div>
                  <label
                    htmlFor="startDate"
                    className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                  >
                    Estimated Start Date
                  </label>
                  <input
                    id="startDate"
                    type="date"
                    name="startDate"
                    required
                    defaultValue={startDate}
                    className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="imageUrl"
                  className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                >
                  Group Image URL
                </label>
                <input
                  id="imageUrl"
                  type="url"
                  name="imageUrl"
                  required
                  defaultValue={imageUrl}
                  placeholder="https://example.com/your-group-image.jpg"
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                />
              </div>

              <hr className="my-8 border-gray-300" />

              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold text-indigo-700">
                  Your Details (Group Admin)
                </h2>
              </div>

              <div>
                <label
                  htmlFor="userName"
                  className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  id="userName"
                  type="text"
                  value={userName}
                  readOnly
                  name="userName"
                  required
                  placeholder="Your Full Name"
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                />
              </div>

              <div>
                <label
                  htmlFor="userEmail"
                  className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                >
                  Your Email
                </label>
                <input
                  id="userEmail"
                  type="email"
                  value={userEmail}
                  readOnly
                  name="userEmail"
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out transform hover:scale-105"
                >
                  Update Hobby Group
                </button>
              </div>
            </form>
          </Fade>
        </Fade>
      </div>
    </div>
  );
};

export default Update;
