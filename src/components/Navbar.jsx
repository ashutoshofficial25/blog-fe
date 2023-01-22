import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav sticky top-0 z-20 px-20 py-3 bg-slate-700 ">
      <Link to="/" className="nav-brand text-3xl text-white font-extrabold">
        Blogging
      </Link>
    </div>
  );
};

export default Navbar;
