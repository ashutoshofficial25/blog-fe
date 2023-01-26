import axios from "axios";
import jwtDecode from "jwt-decode";
import { constants } from "../config/config";

export const getAccessToken = async () =>
  JSON.parse(localStorage.getItem("token"));

export const setAccessToken = async (token) =>
  JSON.stringify(localStorage.setItem("token", token));

export const verifyToken = async (token) => {
  if (!token) {
    return false;
  }
  const decode = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  return decode.exp > currentTime;
};

export const isAuthencated = () => !!getAccessToken();

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
