import React, { useEffect } from "react";
import BlogCard from "../../components/BlogCard";
import { getAllBlogs } from "../../services/blogServices";

const Home = () => {
  const fetchAllBlogs = async () => {
    await getAllBlogs();
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-10 my-20 mx-20">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default Home;
