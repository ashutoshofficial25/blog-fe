import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../Loading";
import { userLogin } from "../../feature/userSlice";

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
  const navigate = useNavigate();


  const init = async () => {
    const token = await getToken();

    //chheck if token is there an valid
    if (!token || !await verifyToken(token)) {
      
      console.log("Token is invalid", token);
      setLoading(false);
      navigate("/login"); 
    }

    const account = await getAccount();
    if (!account) {
      loginWithToken().then((response) => {
        setLoading(false);
        if (!response) {
          return navigate("/login");
        }

        if (response.error) {
          return navigate("/login");
        }
        //set toke and session
        setSession(response.token, response.user);
        dispatch({
          user: response.user,
        });
        return;
      });
    }

    await setSession(token, account);
    console.log(account);

    dispatch(
      userLogin({
        user: account,
      })
    );
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
