import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const handleLogin = () => {};

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-xs mx-auto">
        <Formik initialValues={initialState} onSubmit={handleLogin}>
          {({ handleChange, handleSubmit, handleBlur, values }) => (
            <form
              className="bg-white p-6 rounded-lg shadow-md"
              onSubmit={handleSubmit}
            >
              <h2 className="text-lg font-medium mb-4">Login</h2>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="text-center">
                <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
                  Login
                </button>
              </div>
              <div className="mt-4 mb-2 text-center">
                <div className="block text-gray-700 font-medium mb-2">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-indigo-500">
                    Signup
                  </Link>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
