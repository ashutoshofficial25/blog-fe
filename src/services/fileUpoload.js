import axios from "axios";
import { constants } from "../config/config";

export const uploadImage = async (payload) => {
  const request = await axios.post(
    `${constants.BASE_URL}/utils/uploadImage`,
    payload,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  try {
    return request.data;
  } catch (error) {
    return error.response.data;
  }
};
