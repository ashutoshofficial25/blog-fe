import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
  fullname: Yup.string("Required").min(
    3,
    "Name must be at least 3 characters long"
  ),
  email: Yup.string().email("Put a valid email").required("Required"),

  password: Yup.string()
    .required("Required")
    .min(4, "Minimum 4 characters required"),
});
