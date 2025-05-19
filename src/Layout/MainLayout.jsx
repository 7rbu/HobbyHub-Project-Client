import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <div className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </div>
      </header>

      <main className="flex-1">
        <div className="">
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
