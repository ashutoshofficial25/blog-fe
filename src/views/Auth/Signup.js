import React from "react";
import { ErrorMessage, Field, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { SignupSchema } from "../../schemas/signupSchema";
import { signup } from "../../services/authServices";

const Signup = () => {
  const navigate = useNavigate();

  const initialState = {
    fullname: "",
    email: "",
    password: "",
  };

  const handleSignup = async (formdata) => {
    const data = await signup(formdata);

    if (data.error) {
      return Swal.fire({
        position: "top-end",
        icon: "error",
        title: data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Signed up Success, Please Login..!",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/login");
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-md mx-auto px-5">
        <Formik
          initialValues={initialState}
          onSubmit={handleSignup}
          validationSchema={SignupSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            handleBlur,
            values,
            touched,
          }) => (
            <form
              className="bg-white p-6 rounded-lg shadow-md px-5"
              onSubmit={handleSubmit}
            >
              <h2 className="text-lg font-medium mb-4">Singup</h2>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="fullname"
                >
                  Full Name
                </label>
                <Field
                  className={`${
                    touched.fullname && errors.fullname
                      ? "border-red-500 outline-red-500"
                      : "border-gray-400"
                  }  w-full border  p-2 rounded-lg`}
                  type="fullname"
                  id="fullname"
                  onBlur={handleBlur}
                  value={values.fullname}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />
                <ErrorMessage
                  component="div"
                  name="fullname"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Field
                  className={`${
                    touched.email && errors.email
                      ? "border-red-500 outline-red-500"
                      : "border-gray-400"
                  }  w-full border  p-2 rounded-lg`}
                  value={values.email}
                  onChange={handleChange}
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <Field
                  className={`${
                    touched.password && errors.password
                      ? "border-red-500 outline-red-500"
                      : "border-gray-400"
                  }  w-full border  p-2 rounded-lg`}
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  id="password"
                  placeholder="Password"
                  required
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  className="text-red-500"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
                >
                  Singup
                </button>
              </div>
              <div className="mt-4 mb-2 text-center">
                <div className="block text-gray-700 font-medium mb-2">
                  Already have an account?{" "}
                  <Link to="/login" className="text-indigo-500">
                    Login
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

export default Signup;
