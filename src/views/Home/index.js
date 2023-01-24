import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../components/BlogCard";
import Button from "../../components/Button";
import IconButton from "../../components/IconButton";
import { getAllBlogs } from "../../services/blogServices";
import createIcon from "../../static/create.png";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchAllBlogs = async () => {
    try {
      const { data } = await getAllBlogs();

      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <div className="flex relative flex-wrap justify-center gap-10  m-20 max-sm:m-10">
      {blogs.length == 0 ? (
        <h2 className="text-center text-gray-500 text-2xl font-bold!">
          No blogs found
        </h2>
      ) : (
        blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
      )}
      <Link to="/newblog" className="fixed bottom-10 right-10 ">
        <IconButton image={createIcon} />
      </Link>{" "}
    </div>
  );
};

export default Home;
