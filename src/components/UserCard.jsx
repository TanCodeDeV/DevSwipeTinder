import React, { useEffect, useState } from "react";
import { GITHUB_USER_API } from "../utils/constants";
import { Link } from "react-router";
import { GITHUB_HEADERS } from "../utils/apiHeaders";

const UserCard = ({ user }) => {
  const [data, setData] = useState(null);

  const getUserDetails = async () => {
    const data = await fetch(GITHUB_USER_API + user.login, {
      headers: GITHUB_HEADERS,
    });
    const jsonData = await data.json();
    setData(jsonData);
  };

  useEffect(() => {
    getUserDetails();
  }, [user]);
  return (
    user &&
    data && (
      <div className="flex justify-center my-5 m-2 p-2">
        <div className="card bg-base-300 w-96 shadow-sm">
          <figure>
            <img src={data.avatar_url} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-xl">{data.name}</h2>
            <div className="flex">
              <p className="text-pink-500 font-serif font-semibold">
                Followers: {data.followers}
              </p>
              <p className="text-pink-500 font-serif font-semibold">
                Public Repos: {data.public_repos}
              </p>
            </div>

            <p className="text-pink-500 font-serif font-semibold">
              Location: {data.location}
            </p>
            <Link to={data.blog} target="_blank" className=" font-semibold">
              Read my blog: {data.blog}
            </Link>
            <div className="flex justify-center">
              <div className="card-actions mx-2">
                <button className="btn btn-primary font-semibold">
                  Ignore
                </button>
              </div>
              <div className="card-actions  mx-2">
                <button className="btn btn-secondary font-semibold">
                  Interested
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default UserCard;
