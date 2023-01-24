import React from "react";
import { Link } from "react-router-dom";
import { getImage } from "../services/blogServices";
import { constants } from "../config/config";

const BlogCard = ({ blog }) => {
  console.log(blog);
  //need of

  return (
    // https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=
    <div className="max-w-sm rounded border border-gray-500 overflow-hidden shadow-xl hover:shadow-2xl">
      <Link to={`/blog/${blog._id}`} className="content ">
        <img
          className="w-full"
          src={
            blog.thumbnail
              ? `${constants.IMG_URL}/uploads/blogImages/${blog.thumbnail}`
              : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
          }
          alt={blog.title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{blog.title}</div>
          <p className="text-gray-700 text-base">{blog.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
//  <div className="card border p-1 border-slate-500 shadow-xl w-fit rounded-xl">
//       <Link to={`/blog/${blog._id}`} className="content ">
//         <img
//           src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
//           alt="image"
//           className="w-56 object-cover rounded-xl"
//         />
//         <div className="card-title text-xl pt-2 font-bold">{blog.title}</div>
//         <article className="px-3 py-2 w-56 font-semibold">
//           <p>{blog.description}</p>
//         </article>
//       </Link>
//     </div>
