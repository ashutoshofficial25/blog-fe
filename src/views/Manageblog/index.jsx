import React, { useEffect, useState } from "react";
import Loading from "../../Loading";
import { deleteBlog, getAllBlogs } from "../../services/blogServices";

const data = [
  { id: 1, title: "The idea is to place title here in this secton" },
  { id: 2, title: "Data 2" },
  { id: 3, title: "Data 3" },
  { id: 4, title: "Data 4" },
  { id: 5, title: "Data 5" },
];

const Manageblogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getAllBlogs();
      setBlogs(data);
      setLoading(false);
      console.log("log:", data);
    }

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const del = await deleteBlog(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (id) => {};

  return (
    <div className="flex flex-col w-full min-h-screen items-center">
      <div className="text-center m-10 font-bold text-xl">
        <h1>Manage Blogs</h1>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="border p-5 border-gray-500">
          <table className="table-auto text-center">
            <thead>
              <tr className="bg-gray-200 ">
                <th className="px-4 py-2 min-w-28">ID</th>
                <th className="px-4 py-2 min-w-28">Title</th>
                <th className="px-4 py-2 w-44">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.length ? (
                blogs.map((blog, i) => (
                  <tr key={blog._id}>
                    <td className="border px-4 py-2">{i + 1}</td>
                    <td className="border px-4 py-2">{blog.title}</td>
                    <td className="border px-4 py-2 flex justify-between">
                      <button className="bg-blue-500 text-white px-2 py-1 rounded">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td></td>
                  <div className="text-indigo-500 text-center text-3xl font-bold">
                    No blogs yet! Go and Create one
                  </div>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Manageblogs;
