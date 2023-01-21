import React, { useEffect } from "react";
import { useState } from "react";
import BlogCard from "../../components/BlogCard";
import { getAllBlogs } from "../../services/blogServices";

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
    <div className="flex flex-wrap justify-center gap-10 my-20 mx-20">
      {blogs.length
        ? blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
        : ""}
    </div>
  );
};

export default Home;
