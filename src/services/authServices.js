import axios from "axios";
import jwtDecode from "jwt-decode";
import { constants } from "../config/config";
import Axios from "../config/Axios";

export const getToken = async () => JSON.parse(localStorage.getItem("token"));

export const getAccount = async () =>
  JSON.parse(localStorage.getItem("account"));

export const setToken = async (token) =>
  JSON.stringify(localStorage.setItem("token", token));

export const setSession = (token, account) => {
  if (token) {
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("account", JSON.stringify(account));

    //set axios intersepter
    Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    Axios.defaults.headers.post["Content-Type"] = "application/json";
    //  Axios.defaults.withCredentials = true;
  } else {
    localStorage.removeItem("token");
    localStorage.removeItem("account");
    delete Axios.defaults.headers.common.Authorization;
  }
};

export const verifyToken = async (token) => {
  if (!token) {
    return false;
  }
  const decode = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  return decode.exp > currentTime;
};

export const isAuthencated = () => !!getToken();

export const signup = async (payload) => {
  try {
    const response = await axios.post(
      `${constants.BASE_URL}/auth/signup`,
      payload
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const login = async (payload) => {
  try {
    const response = await axios.post(
      `${constants.BASE_URL}/auth/login`,
      payload
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(`${constants.BASE_URL}/auth/logout`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//
export async function loginWithToken() {
  try {
    let request = await Axios.get(`${constants.BASE_URL}/auth/loginwithtoken`);
    return request.data;
  } catch (error) {
    return error.response.data;
  }
}
