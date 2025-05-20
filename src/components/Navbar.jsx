import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../context/AuthContext";
import LoadingSpinners from "./LoadingSpinners";
// import "./styles.css";
import Swal from "sweetalert2";

const Navbar = () => {
  const { loginUser, signOutUser, loading } = useContext(AuthContext);
  if (loading) {
    return <LoadingSpinners></LoadingSpinners>;
  }

  const navLinks = (
    <>
      <li>
        <NavLink to={"home"} className={"hover:bg-green-700 hover:text-white"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"allgroups"}
          className={"hover:bg-green-700 hover:text-white"}
        >
          All Groups
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"creategroup"}
          className={"hover:bg-green-700 hover:text-white"}
        >
          Create Group
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"mygroup"}
          className={"hover:bg-green-700 hover:text-white"}
        >
          My Groups
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "✅ Logout Successful",
          text: "You have been successfully logged out.",
          icon: "success",
          draggable: true,
        });
      })
      .catch(() => {
        Swal.fire({
          title: "❌ Logout Failed",
          text: "Something went wrong. Please try again.",
          icon: "error",
          draggable: true,
        });
      });
  };

  return (
    <div className="navbar p-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl p-0">
          Papaya
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5 border border-gray-200 rounded-full px-20 shadow-sm">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <div className="">
          {loginUser && (
            <img
              title={`${loginUser.displayName}`}
              className="w-10 cursor-pointer rounded-full border"
              src={
                loginUser.photoURL ||
                "https://img.icons8.com/?size=80&id=108639&format=png"
              }
              alt=""
            />
          )}
        </div>

        <div className="">
          {loginUser ? (
            <NavLink
              onClick={handleLogout}
              className={"btn hover:bg-green-700 hover:text-white"}
              to={"login"}
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              className={"btn hover:bg-green-700 hover:text-white"}
              to={"login"}
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
