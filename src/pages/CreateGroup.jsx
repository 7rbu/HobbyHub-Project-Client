import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";
import { Fade, Slide } from "react-awesome-reveal";

const CreateGroup = () => {
  const { loginUser } = useContext(AuthContext);

  const handleGroupData = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const groupData = Object.fromEntries(formData.entries());
    console.log(groupData);

    fetch("http://localhost:3000/creategroup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groupData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Group Created Successfully!",
          text: "Your group is live. Let the fun begin!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-lg p-6 sm:p-8 md:p-10">
        <div className="text-center mb-8">
          <Slide>
            <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700">
              Create Your Hobby Hub
            </h1>
          </Slide>

          <Fade delay={1e3} cascade damping={1e-1}>
            <p className="mt-2 text-sm text-gray-600">
              Build a community around what you love
            </p>
          </Fade>
        </div>

        <Fade cascade damping={0.2}>
          <form onSubmit={handleGroupData} className="space-y-6">
            <div>
              <label
                htmlFor="groupName"
                className="block text-sm font-semibold text-gray-800 mb-1"
              >
                Group Name
              </label>
              <input
                id="groupName"
                type="text"
                name="groupName"
                required
                placeholder="Enter your group name"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              />
            </div>

            <div>
              <label
                htmlFor="hobbyCategory"
                className="block text-sm font-semibold text-gray-800 mb-1"
              >
                Hobby Category
              </label>
              <select
                id="hobbyCategory"
                name="hobbyCategory"
                required
                defaultValue=""
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out bg-white"
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
                className="block text-sm font-semibold text-gray-800 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                required
                placeholder="What's your group about?"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="meetingLocation"
                className="block text-sm font-semibold text-gray-800 mb-1"
              >
                Meeting Location
              </label>
              <input
                id="meetingLocation"
                name="meetingLocation"
                type="text"
                required
                placeholder="Add a physical or online location"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="maxMembers"
                  className="block text-sm font-semibold text-gray-800 mb-1"
                >
                  Max Members
                </label>
                <input
                  id="maxMembers"
                  type="number"
                  name="maxMembers"
                  required
                  min="2"
                  placeholder="e.g., 25"
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                />
              </div>
              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-semibold text-gray-800 mb-1"
                >
                  Estimated Start Date
                </label>
                <input
                  id="startDate"
                  type="date"
                  name="startDate"
                  required
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="imageUrl"
                className="block text-sm font-semibold text-gray-800 mb-1"
              >
                Group Image URL
              </label>
              <input
                id="imageUrl"
                type="url"
                name="imageUrl"
                required
                placeholder="https://example.com/your-group-image.jpg"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              />
            </div>

            <hr className="my-8 border-gray-300" />

            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-indigo-600">
                Your Details (Group Admin)
              </h2>
            </div>

            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-semibold text-gray-800 mb-1"
              >
                Your Name
              </label>
              <input
                id="userName"
                type="text"
                value={`${loginUser?.displayName}`}
                name="userName"
                required
                placeholder="Your Full Name"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              />
            </div>

            <div>
              <label
                htmlFor="userEmail"
                className="block text-sm font-semibold text-gray-800 mb-1"
              >
                Your Email
              </label>
              <input
                id="userEmail"
                type="email"
                value={`${loginUser?.email}`}
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
                Create Hobby Group
              </button>
            </div>
          </form>
        </Fade>
      </div>
    </div>
  );
};

export default CreateGroup;
