import React from "react";
import { redirect } from "react-router-dom";

import {
  getAccessToken,
  isAuthencated,
  verifyToken,
} from "../services/authServices";
const Auth = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const init = async () => {
    const token = await getAccessToken();

    //chheck if token is there an valid
    if (!token || verifyToken(token)) {
      console.log("Token is invalid", token);
      setLoading(false);
      redirect("/login");
    }
  };

  return <></>;
};

export default Auth;
