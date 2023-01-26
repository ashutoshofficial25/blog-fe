import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { redirect } from "react-router-dom";
import Loading from "../../Loading";

import {
  getAccount,
  getToken,
  loginWithToken,
  setSession,
  verifyToken,
} from "../../services/authServices";
const Auth = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const init = async () => {
    const token = await getToken();

    //chheck if token is there an valid
    if (!token || verifyToken(token)) {
      console.log("Token is invalid", token);
      setLoading(false);
      redirect("/login");
    }

    const account = await getAccount();
    if (!account) {
      loginWithToken().then((response) => {
        setLoading(false);
        if (!response) {
          return redirect("/login");
        }

        if (response.error) {
          return redirect("/login");
        }
        //set toke and session
        setSession(response.token, response.user);
        dispatch({
          user: response.user,
        });
        return;
      });
    }

    setSession(token, account);
    dispatch({
      user: response.user,
    });
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return children;
};

export default Auth;
