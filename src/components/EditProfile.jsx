import React, { useState } from "react";
import UserCard from "./UserCard";

const EditProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [followers, setFollowers] = useState(user.followers);
  const [repos, setRepos] = useState(user.public_repos);
  const [location, setLocation] = useState(user.location);
  const [blog, setBlog] = useState(user.blog);
  const [url, setUrl] = useState(user.avatar_url);

  return (
    <div className="flex justify-center">
      <div className="flex justify-center mb-20 mx-10">
        <div className="card bg-base-300 w-96 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-2xl mb-2 p-2">
              Edit Profile
            </h2>
            <div>
              <fieldset className="fieldset mb-1">
                <legend className="fieldset-legend text-xl ">Name</legend>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input"
                  placeholder="Enter your Name"
                />
              </fieldset>

              <fieldset className="fieldset mb-1">
                <legend className="fieldset-legend text-xl ">Followers</legend>
                <input
                  type="text"
                  value={followers}
                  onChange={(e) => setFollowers(e.target.value)}
                  className="input"
                  placeholder="Enter your Email"
                />
              </fieldset>
              <fieldset className="fieldset mb-1">
                <legend className="fieldset-legend text-xl ">Avtar URL</legend>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="input"
                  placeholder="Enter your Email"
                />
              </fieldset>
              <fieldset className="fieldset mb-1">
                <legend className="fieldset-legend text-xl">
                  Public Repos
                </legend>
                <input
                  type="text"
                  value={repos}
                  onChange={(e) => setRepos(e.target.value)}
                  className="input"
                  placeholder="Enter your password"
                />
              </fieldset>
              <fieldset className="fieldset mb-1">
                <legend className="fieldset-legend text-xl">Location</legend>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="input"
                  placeholder="Enter your password"
                />
              </fieldset>
              <fieldset className="fieldset mb-1">
                <legend className="fieldset-legend text-xl">Blog</legend>
                <input
                  type="text"
                  value={blog}
                  onChange={(e) => setBlog(e.target.value)}
                  className="input"
                  placeholder="Enter your password"
                />
              </fieldset>
            </div>

            <div className="card-actions mt-1">
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <UserCard user={{ name, followers, repos, location, blog, url }} />
      </div>
    </div>
  );
};

export default EditProfile;
