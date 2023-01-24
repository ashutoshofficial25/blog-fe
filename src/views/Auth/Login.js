import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../components/Button";
import { userLogin } from "../../feature/userSlice";
import { login } from "../../services/authServices";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialState = {
    email: "",
    password: "",
  };

  const handleLogin = async (formdata) => {
    const user = await login(formdata);

    console.log(user);
    if (user.error) {
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: user.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    dispatch(
      userLogin({
        user: user.data,
      })
    );
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Logedin Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

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
                  value={values.email}
                  onChange={handleChange}
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
                  value={values.password}
                  onChange={handleChange}
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
