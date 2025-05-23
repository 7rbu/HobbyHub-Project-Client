import React, { useContext } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeContext } from "../context/ThemeContext";

const MainLayout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="min-h-screen flex flex-col" data-theme={theme || "light"}>
      <header>
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
      </header>

      <main className="flex-1">
        <div className="w-11/12 mx-auto my-10">
          <Outlet></Outlet>
        </div>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
