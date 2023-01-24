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
    dispatch(logout());

    navigate("/login");
  };

  return (
    <div className="nav sticky top-0 z-20 px-20 py-3 bg-slate-700 flex justify-between items-center">
      <Link to="/" className="nav-brand text-3xl text-white font-extrabold">
        Blogging
      </Link>
      <div>
        {user?.user ? (
          <div className="flex gap-5">
            <div className="nav-link text-white font-bold cursor-pointer">
              {user.user.fullname.split(" ")[0]}
            </div>
            <div
              onClick={handleLogout}
              className="nav-link text-white font-bold cursor-pointer"
            >
              Logout
            </div>
          </div>
        ) : (
          <Link to="/login" className="nav-link text-white font-bold">
            login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
