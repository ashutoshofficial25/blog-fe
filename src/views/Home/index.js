import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../components/BlogCard";
import IconButton from "../../components/IconButton";
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
    <div className="flex relative flex-wrap justify-center gap-10 my-20 mx-20">
      {blogs.length
        ? blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
        : ""}
      <Link to="/newblog" className="fixed bottom-10 right-10 ">
        <IconButton title="add blog" />
      </Link>{" "}
    </div>
  );
};

export default Home;
