import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../components/firebase";
import { addUser, removeUser } from "../slices/userSlice";

const useLogin = () => {
  const dispatch = useDispatch();
  const [isAuthChecked, setIsAuthChecked] = useState(false); // Track auth status

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(removeUser());
      }
      setIsAuthChecked(true); // Set auth check as completed
    });

    return () => unsubscribe();
  }, [dispatch]);

  return isAuthChecked; // Return the auth check status
};

export default useLogin;
