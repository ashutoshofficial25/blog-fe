import React from "react";

const data = [
  { id: 1, title: "The idea is to place title here in this secton" },
  { id: 2, title: "Data 2" },
  { id: 3, title: "Data 3" },
  { id: 4, title: "Data 4" },
  { id: 5, title: "Data 5" },
];

const Manageblogs = () => {
  return (
    <div className="flex flex-col w-full min-h-screen items-center">
      <div className="text-center m-10 font-bold text-xl">
        <h1>Manage Blogs</h1>
      </div>
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
            {data.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.title}</td>
                <td className="border px-4 py-2 flex justify-between">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manageblogs;
