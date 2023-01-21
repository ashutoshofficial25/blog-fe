import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  console.log(blog);
  //need of description

  return (
    <div className="card border p-1 border-slate-500 shadow-xl w-fit rounded-xl">
      <Link to={`/blog/${blog._id}`} className="content ">
        <img
          src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
          alt="image"
          className="w-56 object-cover rounded-xl"
        />
        <div className="card-title text-xl pt-2 font-bold">{blog.title}</div>
        <article className="px-3 py-2 w-56 font-semibold">
          <p>{blog.content.substring(0, 50)}</p>
        </article>
      </Link>
    </div>
  );
};

export default BlogCard;
