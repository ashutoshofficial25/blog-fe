import React from "react";
import { Link, useParams } from "react-router-dom";

const Navbar = () => {
  console.log("log: ", window.location.pathname);

  return (
    <div className="nav sticky top-0 z-20 px-20 py-3 bg-slate-700 flex justify-between items-center">
      <Link to="/" className="nav-brand text-3xl text-white font-extrabold">
        Blogging
      </Link>
      <div>
        <Link to="/newblog" className="nav-link text-white font-bold">
          Create blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
