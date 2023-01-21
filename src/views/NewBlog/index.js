import MDEditor from "@uiw/react-md-editor";
import React from "react";

const NewBlog = () => {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div className="new-blog mt-16 px-28" data-color-mode="dark">
      <form onSubmit={handleSubmit}>
        <label className="text-xl text-gray-600 mt-5">
          Title <span className="text-red-500">*</span>
        </label>
        <br />
        <input
          type="text"
          className="border-2 border-gray-300 p-2 px-5 w-full mb-3"
          name="title"
          id="title"
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
          required
        />

        <MDEditor value={value} height={300} draggable onChange={setValue} />
        {/* <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} /> */}

        <div className="text-center my-5">
          <button
            type="submit"
            className="btn btn-primary border py-2 px-4 border-slate-500 w-full hover:bg-slate-500 duration-1000 bg-slate-300 rounded-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBlog;
