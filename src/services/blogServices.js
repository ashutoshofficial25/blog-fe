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

export async function getImage() {
   try {
      const response = await axios.get(
         "http://localhost:3008/uploads/blogImages/pho.jpeg",
         {
            responseType: "arraybuffer",
         }
      );
      const base64Image = new Buffer(response.data, "binary").toString(
         "base64"
      );
      const imgSrc = `data:${response.headers["content-type"]};base64,${base64Image}`;
      return imgSrc;
      // use the imgSrc in an image tag or do something else with it
   } catch (error) {
      console.error(error);
   }
}
