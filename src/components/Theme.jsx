import React from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { useDarkMode } from "../context/ThemeContext";

const Theme = () => {
  const { darkMode, handleTheme } = useDarkMode();
  return (
    <>
      <div className="inline-block">
        <button className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 ">
          {darkMode !== "dark" ? (
            <span
              onClick={() => handleTheme("dark")}
              className="flex items-center gap-2 font-semibold text-gray-800 dark:text-gray-200 cursor-pointer select-none"
            >
              <IoMoon className="text-xl" />
              Dark Mode
            </span>
          ) : (
            <span
              onClick={() => handleTheme("light")}
              className="flex items-center gap-2 font-semibold text-yellow-400 cursor-pointer select-none"
            >
              <IoSunny className="text-xl" />
              Light Mode
            </span>
          )}
        </button>
      </div>
    </>
  );
};

export default Theme;
