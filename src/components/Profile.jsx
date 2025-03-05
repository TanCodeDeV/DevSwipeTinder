import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
  const actualUser = useSelector((store) => store.actualUser);
  return (
    actualUser && (
      <div>
        <h1>Hello profile</h1>
        <EditProfile user={actualUser} />
      </div>
    )
  );
};

export default Profile;
