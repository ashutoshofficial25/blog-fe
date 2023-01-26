import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { logout } from "../feature/userSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(user);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());

    navigate("/login");
  };

  return (
    <div className="nav text-indigo-400 font-medium sticky top-0 z-20 px-20 py-3 bg-white rounded-lg shadow-md flex justify-between items-center">
      <Link to="/" className="nav-brand text-3xl  font-extrabold">
        Blogging
      </Link>
      <div>
        {user?.user ? (
          <div className="flex gap-5 font-bold">
            <Link to="/newblog" className="nav-link font-bold">
              Create Blog
            </Link>
            <Link to="/manageblog" className="nav-link font-bold">
              Manage Blog
            </Link>
            <div className="nav-link  cursor-pointer">
              {user.user.fullname.split(" ")[0]}
            </div>
            <div onClick={handleLogout} className="nav-link cursor-pointer">
              Logout
            </div>
          </div>
        ) : (
          <Link to="/login" className="nav-link font-bold">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
