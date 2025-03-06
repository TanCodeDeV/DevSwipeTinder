import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GITHUB_USER_API } from "../utils/constants";
import useLogout from "../utils/hooks/useLogout";
import { Link } from "react-router";
import { addActualUser } from "../utils/slices/actualUserSlice";
import { GITHUB_HEADERS } from "../utils/apiHeaders";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const [data, setData] = useState(null);
  const logout = useLogout(); // Get the logout function
  const disptach = useDispatch();

  const getUserDetails = async () => {
    const data = await fetch(GITHUB_USER_API + user.displayName, {
      headers: GITHUB_HEADERS,
    });
    const jsonData = await data.json();
    setData(jsonData);
    disptach(addActualUser(jsonData));
  };

  useEffect(() => {
    getUserDetails();
  }, [user]);

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl bg-base-100">
          🧑‍💻DevSwipeTinder
        </Link>
      </div>
      <div className="flex gap-2">
        {/* <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        /> */}
        {user && data && (
          <div className="dropdown dropdown-end mx-10 flex">
            <div>
              <p className="m-2 px-2">Welcome, {data.name}</p>
            </div>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={data.avatar_url}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/connections">Connections</Link>
              </li>
              <li>
                <a onClick={logout}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
