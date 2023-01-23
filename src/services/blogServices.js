import axios from "axios";
import { constants } from "../config/config";

export const getAllBlogs = async () => {
  try {
    const request = await axios.get(`${constants.BASE_URL}/blog`);
    return request.data;
  } catch (error) {
    return error.response.data;
  }
};

export const addNewBlog = async (payload) => {
  try {
    const request = await axios.post(`${constants.BASE_URL}/blog`, payload);
    return request.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getBlogDetails = async (id) => {
  try {
    const request = await axios.get(`${constants.BASE_URL}/blog/${id}`);
    return request.data;
  } catch (error) {
    return error.response.data;
  }
};
