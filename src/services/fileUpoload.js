import axios from "axios";
import { constants } from "../config/config";

export const uploadImage = async (payload) => {
  const request = await axios.post(
    `${constants.BASE_URL}/utils/uploadImage`,
    payload
  );

  try {
    return request.data;
  } catch (error) {
    return error.response.data;
  }
};
