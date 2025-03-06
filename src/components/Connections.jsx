import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GITHUB_USER_API } from "../utils/constants";
import { addConnection } from "../utils/slices/connectionSlice";
import UserCard from "./UserCard";
import { GITHUB_HEADERS } from "../utils/apiHeaders";

const Connections = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const getConnectionDetails = async () => {
    const data = await fetch(
      GITHUB_USER_API + user.displayName + "/following",
      {
        headers: GITHUB_HEADERS,
      }
    );
    const jsonData = await data.json();
    console.log(jsonData);
    dispatch(addConnection(jsonData));
  };
  useEffect(() => {
    getConnectionDetails();
  }, []);
  const userConnections = useSelector((store) => store.connection);
  console.log("useselctor connection");
  console.log(userConnections);
  if (!userConnections || userConnections.length === 0)
    return <h1>Loading............</h1>;

  return (
    userConnections && (
      <>
        <h1 className="font-bold text-2xl mt-7 flex justify-center">
          User Connections:
        </h1>
        <div className="flex flex-wrap justify-center m-2 p-2">
          {userConnections.map((user) => (
            <div className="flex">
              <UserCard user={user} />
            </div>
          ))}
        </div>
      </>
    )
  );
};

export default Connections;
