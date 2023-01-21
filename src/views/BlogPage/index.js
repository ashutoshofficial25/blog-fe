import MDEditor from "@uiw/react-md-editor";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogDetails } from "../../services/blogServices";

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
    <div className="blog mx-20 my-10">
      {blogDetail ? (
        <>
          <h1 className="text-2xl font-bold text-center">Blogpost title</h1>

          <img
            className="h-48  mt-6 m-auto"
            src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
            alt="image of the blog"
          />
          <article className="px-20 pt-10 text-xl tracking-wide">
            <MDEditor.Markdown source={blogDetail.content} />
          </article>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default BlogPage;
