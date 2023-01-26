import * as Yup from "yup";
export const loginSchema = Yup.object().shape({
  email: Yup.string().required("Please enter email").email("Put a valid email"),
  password: Yup.string("Required")
    .required("Enter Password")
    .min(4, "Minimum 4 characters required"),
});
