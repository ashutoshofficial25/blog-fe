import axios from "axios";

const instance = axios.create({
   headers: `Bearer ${localStorage.getItem("token")}`,
});

export default instance;
