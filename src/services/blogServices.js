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

export const getBlogByUserId = async (userId) => {
  try {
    const request = await axios.get(
      `${constants.BASE_URL}/blog/userBlog/${userId}`
    );
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

export const updateBlog = async (id, payload) => {
  try {
    const request = await axios.patch(
      `${constants.BASE_URL}/blog/${id}`,
      payload
    );
    return request.data;
  } catch (error) {
    return error.response.data;
  }
};
export const deleteBlog = async (id) => {
  try {
    const request = await axios.delete(`${constants.BASE_URL}/blog/${id}`);
    return request.data;
  } catch (error) {
    return error.response.data;
  }
};
