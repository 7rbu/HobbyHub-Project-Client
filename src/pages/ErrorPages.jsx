import React, { useEffect } from "react";
import { Link } from "react-router";
import ErrorImage from "../assets/error.svg";

const ErrorPages = () => {
  useEffect(() => {
    document.title = "Error Pages";
  }, []);
  return (
    <>
      <div className="text-center Mulish my-10 dark:bg-gray-900 rounded-2xl py-4">
        <img className="w-[600px] mx-auto" src={ErrorImage} alt="" />
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-indigo-700 sm:text-7xl hover:scale-110 duration-1000 transition-all">
          404 - Page Not Found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 dark:text-gray-300 sm:text-xl/8 hover:scale-110 duration-1000 transition-all">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to={"/"}>
            <button className="cursor-pointer text-white bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-xs hover:scale-110 duration-1000 transition-all">
              Go back home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPages;
