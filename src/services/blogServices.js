import axios from "axios";
import { constants } from "../config/config";

export const getAllBlogs = async () => {
  const request = await axios.get(`${constants.BASE_URL}/blog`);

  try {
    return request.data;
  } catch (error) {
    return error.response.data;
  }
};

export const addNewBlog = async (payload) => {
  const request = await axios.post(`${constants.BASE_URL}/blog`, payload);
  try {
    return request.data;
  } catch (error) {
    return error.response.data;
  }
};
