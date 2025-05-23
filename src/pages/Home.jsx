import React, { useContext } from "react";
import Theme from "../components/Theme";
import Slider from "../components/Slider";
import { useLoaderData } from "react-router";
import FeaturedGroup from "../components/FeaturedGroup";
import CountUpCard from "../components/CountUpCard";
import FeaturesSections from "../components/FeaturesSections";
import { ThemeContext } from "../context/ThemeContext";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
const Home = () => {
  const featuredGroupData = useLoaderData();
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <div>
      <Theme></Theme>

      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
      >
        {theme === "light" ? (
          <>
            <IoMoon className="text-lg" />
            <span>Dark Mode</span>
          </>
        ) : (
          <>
            <IoSunny className="text-lg text-yellow-400" />
            <span>Light Mode</span>
          </>
        )}
      </button>

      <h1 className="bg-green-200 dark:bg-red-400">Hello World</h1>

      <Slider></Slider>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full mx-auto">
        {featuredGroupData?.map((group) => (
          <FeaturedGroup key={group._id} group={group} />
        ))}
      </div>
      <CountUpCard></CountUpCard>
      <FeaturesSections></FeaturesSections>
    </div>
  );
};

export default Home;
