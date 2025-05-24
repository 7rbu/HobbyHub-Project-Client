import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";

export default function LoginPage() {
  const { signInUser, setLoading, signInWithGoogle } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Login Page";
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        Swal.fire({
          title: "✅ Sign-In Success",
          text: "Welcome back! You’ve signed in successfully.",
          icon: "success",
          draggable: true,
        });
        navigate(`${location.state ? location.state : "/"}`);
        setLoading(false);
      })
      .catch(() => {
        Swal.fire({
          title: "❌ Sign-In Failed",
          text: "Invalid credentials. Please check your email and password.",
          icon: "error",
          draggable: true,
        });
        setLoading(false);
      });
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          title: "🎉 Login Successful!",
          text: "Login successful. Let's get started!",
          icon: "success",
          draggable: true,
        });
        setLoading(false);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {});
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 bg-white dark:bg-gray-900">
        <h2 className="text-center text-3xl font-extrabold text-indigo-800 mb-6">
          Sign in to your account
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
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
              className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
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

          <div className="flex justify-end items-center text-sm">
            <Link className="text-indigo-600 hover:underline">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
          >
            Sign in
          </button>
        </form>

        <div className="my-6 flex items-center gap-2">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="text-sm text-gray-500 dark:text-gray-500">
            Or continue with
          </span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        <div className="flex justify-center flex-col sm:flex-row gap-4">
          <button
            onClick={handleGoogleSignUp}
            type="button"
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
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-500">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="cursor-pointer text-indigo-600 hover:underline font-medium"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}
