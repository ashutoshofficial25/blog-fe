import React from "react";

const BlogCard = () => {
  return (
    <div className="card border p-1 border-slate-500 shadow-xl w-fit rounded-xl">
      <div className="content ">
        <img
          src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
          alt="image"
          className="w-56 object-cover rounded-xl"
        />
        <div className="card-title text-xl pt-2 font-bold">Blog title</div>
        <article className="px-3 py-2 w-56 font-semibold">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. aliquip
            ex ea
          </p>
        </article>
      </div>
    </div>
  );
};

export default BlogCard;
