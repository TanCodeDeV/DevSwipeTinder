import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GITHUB_USER_API } from "../utils/constants";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const [data, setData] = useState(null);
  console.log("user in navbar");
  console.log(user);

  const getUserDetails = async () => {
    const data = await fetch(GITHUB_USER_API + user.displayName);
    const jsonData = await data.json();
    console.log("gecth from github");
    console.log(jsonData);
    setData(jsonData);
  };

  useEffect(() => {
    getUserDetails();
  }, [user]);

  return (
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl bg-base-100">🧑‍💻DevSwipeTinder</a>
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
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
