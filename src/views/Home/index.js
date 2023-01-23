import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../components/BlogCard";
import IconButton from "../../components/IconButton";
import { getAllBlogs } from "../../services/blogServices";
import createIcon from "../../static/create.png";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchAllBlogs = async () => {
    const { data } = await getAllBlogs();

    setBlogs(data);
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <div className="flex relative flex-wrap justify-center gap-10 my-20 mx-20">
      {blogs.length == 0 ? (
        <h2 className="text-center text-gray-500">No blogs found</h2>
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
