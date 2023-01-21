import React from "react";
import BlogCard from "../../components/BlogCard";

const Home = () => {
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
