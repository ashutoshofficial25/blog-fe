import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import IconButton from "../../components/IconButton";
import { getBlogDetails } from "../../services/blogServices";
import homeIcon from "../../static/home.png";

const BlogPage = () => {
  const [blogDetail, setBlogDetail] = useState(null);
  const { id } = useParams();

  console.log("log: id", id);

  const fetchBlogDetail = async () => {
    if (id) {
      const { data } = await getBlogDetails(id);
      setBlogDetail(data);

      console.log(data);
    }
  };

  useEffect(() => {
    fetchBlogDetail();
  }, [id]);

  return (
    <div className="blog mx-20 my-10 relative">
      <Link to="/" className="fixed top-28 left-20 ">
        {" "}
        <IconButton image={homeIcon} />
      </Link>
      {blogDetail ? (
        <>
          <h1 className="text-2xl font-bold text-center my-10">
            {blogDetail.title}
          </h1>

          <div className="flex justify-center">
            <img
              className="w-auto h-80"
              src={
                blogDetail.thumbnail
                  ? `http://localhost:3008/uploads/blogImages/${blogDetail.thumbnail}`
                  : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
              }
              alt="image of the blog"
            />
          </div>

          <article className="px-20 pt-10 text-xl tracking-wide">
            <MDEditor.Markdown source={blogDetail.content} />
          </article>
        </>
      ) : (
        <h2 className="text-center text-gray-500">Loading...</h2>
      )}
    </div>
  );
};

export default BlogPage;
