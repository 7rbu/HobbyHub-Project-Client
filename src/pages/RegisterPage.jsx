import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";

export default function RegisterPage() {
  const { createUser, profileUpdate, setLoading, signInWithGoogle } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());

    if (passwordRegExp.test(password) === false) {
      Swal.error(
        "Password must be at least 6 characters and include both uppercase and lowercase letters."
      );
      return;
    }

    createUser(email, password)
      .then(() => {
        Swal.fire({
          title: "🎉 Registration Successful!",
          text: "Registration successful. Let's get started!",
          icon: "success",
          draggable: true,
        });
        setLoading(false);

        profileUpdate({ displayName: displayName, photoURL: photoURL })
          .then(() => {
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch(() => {});

        fetch("https://papaya-server.vercel.app/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
      })
      .catch(() => {
        Swal.fire({
          title: "❌ Registration Failed",
          text: "Something went wrong. Please try again.",
          icon: "error",
          draggable: true,
        });
        setLoading(false);
        return;
      });
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          title: "🎉 Registration Successful!",
          text: "Registration successful. Let's get started!",
          icon: "success",
          draggable: true,
        });
        setLoading(false);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {
        Swal.fire({
          title: "🎉 Sign in with Google failed",
          icon: "error",
          draggable: true,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-6">
          Create an account
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700"
            >
              Photo
            </label>
            <input
              id="photo"
              type="text"
              name="photo"
              required
              placeholder="Photo URL"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="example@mail.com"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
          >
            Sign Up
          </button>
        </form>

        <div className="my-6 flex items-center gap-2">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="text-sm text-gray-500">Or sign up with</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        <div className="flex justify-center flex-col sm:flex-row gap-4">
          <button
            onClick={handleGoogleSignUp}
            className="cursor-pointer flex items-center justify-center gap-2 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="font-medium text-sm">Google</span>
          </button>
          <button className="cursor-pointer flex items-center justify-center gap-2 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 transition">
            <img
              src="https://www.svgrepo.com/show/512317/github-142.svg"
              alt="GitHub"
              className="w-5 h-5"
            />
            <span className="font-medium text-sm">GitHub</span>
          </button>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="cursor-pointer text-indigo-600 hover:underline font-medium"
          >
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  );
}
