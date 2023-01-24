import axios from "axios";
import { constants } from "../config/config";

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
