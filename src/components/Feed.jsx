import React, { useEffect } from "react";
import { GITHUB_Feed_USER_API, GITHUB_USER_API } from "../utils/constants";
import UserCard from "./UserCard";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/slices/feedSlice";

const Feed = () => {
  const disptach = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeedData = async () => {
    const data = await fetch(GITHUB_Feed_USER_API);
    const jsonData = await data.json();
    disptach(addFeed(jsonData));
    console.log(jsonData);
  };
  useEffect(() => {
    getFeedData();
  }, []);
  return (
    feed && (
      <div>
        <UserCard user={feed[6]} />
      </div>
    )
  );
};

export default Feed;
