import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../../components/firebase";
import { removeUser } from "../slices/userSlice";
import { useNavigate } from "react-router";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user from Firebase
      dispatch(removeUser()); // Remove user from Redux state
      navigate("/login");
    } catch (error) {
      console.log("Logout Error:", error.message);
    }
  };

  return handleLogout;
};

export default useLogout;
