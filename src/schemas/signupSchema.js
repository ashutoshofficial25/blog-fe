import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
  fullname: Yup.string("Required"),
  email: Yup.string().email("Put a valid email").required("Required"),
  password: Yup.string().required("Required"),
});
