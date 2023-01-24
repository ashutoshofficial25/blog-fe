import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { SignupSchema } from "../../schemas/signupSchema";

const Signup = () => {
  const initialState = {
    fullname: "",
    email: "",
    password: "",
  };

  const handleSignup = (formdata) => {
    console.log("log: ", formdata);
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
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  type="fullname"
                  id="fullname"
                  onBlur={handleBlur}
                  value={values.fullname}
                  onChange={handleChange}
                  placeholder="Full Name"
                />
                {/* {errors.fullname && touched.fullname && <div>error</div>} */}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full border border-gray-400 p-2 rounded-lg"
                  value={values.email}
                  onChange={handleChange}
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
                  value={values.password}
                  onChange={handleChange}
                  id="password"
                  placeholder="Password"
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
