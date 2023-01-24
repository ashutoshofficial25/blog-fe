import MDEditor from "@uiw/react-md-editor";
import { Formik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../components/Button";
import IconButton from "../../components/IconButton";
import { addNewBlog } from "../../services/blogServices";
import { uploadImage } from "../../services/fileUpoload";
import homeIcon from "../../static/home.png";

const NewBlog = () => {
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const navigate = useNavigate();

  const initialState = {
    title: "",
    description: "",
    content: "",
    thumbnail: "",
  };

  const uploadThumbnail = async (e) => {
    let formdata = new FormData();
    let file = e.target.files[0];
    setThumbnail(file.name);
    formdata.append("file", file);

    try {
      await uploadImage(formdata);
    } catch (error) {
      console.log("log: error", error);
    }
  };

  const handleBlogSubmit = async (formdata) => {
    console.log("log:  hello");
    formdata.content = content;
    formdata.thumbnail = thumbnail;
    console.log("form submitted", formdata);
    try {
      const data = await addNewBlog(formdata);
      if (data) {
        navigate("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your blog posted!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="new-blog mt-16 px-28" data-color-mode="dark">
      <Link to="/" className="fixed top-20 left-10 ">
        {" "}
        <IconButton image={homeIcon} />
      </Link>

      <Formik onSubmit={handleBlogSubmit} initialValues={initialState}>
        {({ handleChange, values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label className="text-xl text-gray-600 mt-5">
              Title <span className="text-red-500">*</span>
            </label>
            <br />
            <input
              type="text"
              className="border-2 border-gray-300 p-2 px-5 w-full mb-3"
              value={values.title}
              onChange={handleChange}
              name="title"
              id="title"
              required
            />

            <label className="text-xl text-gray-600 mt-5">
              Description <span className="text-red-500">*</span>
            </label>
            <br />
            <input
              type="text"
              className="border-2 border-gray-300 p-2 px-5 w-full mb-3"
              name="description"
              value={values.description}
              onChange={handleChange}
              id="  "
              required
            />

            <label className="text-xl text-gray-600">
              Image <span className="text-red-500">*</span>
            </label>
            <br />
            <input
              type="file"
              className="border-2 border-gray-300 p-2 w-full mb-5"
              name="image"
              id="image"
              onChange={uploadThumbnail}
              required
            />

            <MDEditor
              value={content}
              height={300}
              draggable
              onChange={setContent}
            />
            {/* <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} /> */}

            <div className="text-center my-5">
              <Button type="submit">Submit</Button>
              {/* <button
                type="submit"
                className="btn btn-primary border py-2 px-4 border-slate-500 w-full hover:bg-slate-500 duration-1000 bg-slate-300 rounded-xl"
              >
                Submit
              </button> */}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default NewBlog;
