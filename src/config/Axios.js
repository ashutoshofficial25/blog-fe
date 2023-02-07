import axios from "axios";

const instance = axios.create({
   headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
   },
});

export default instance;
