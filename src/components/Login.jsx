import React, { useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slices/userSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const [emailid, setEmailId] = useState("tomtt@gmail.com");
  const [password, setPassword] = useState("tomtt@234");
  const [name, setName] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleSignForm = () => {
    setIsSignIn(!isSignIn);
    setName("");
    setEmailId("");
    setPassword("");
  };

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailid,
        password
      );

      const user = userCredential.user; // Get user from userCredential
      //console.log("User after registration:", user);

      await updateProfile(user, {
        displayName: name,
      });

      dispatch(addUser(user));
    } catch (error) {
      //console.log("Error:", error.message);
    }
  };

  const handleSignIn = async () => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      emailid,
      password
    );

    const userLogin = userCredential.user; // Get user from userCredential
    dispatch(
      addUser({
        uid: userLogin.uid,
        email: userLogin.email,
        displayName: userLogin.displayName,
      })
    );

    console.log("User after Login:", userLogin);

    navigate("/");
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold text-2xl mb-2 p-2">
            {isSignIn ? "Sign Up" : "Login"}
          </h2>
          <div>
            {isSignIn && (
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
            )}
            <fieldset className="fieldset mb-1">
              <legend className="fieldset-legend text-xl ">Email</legend>
              <input
                type="text"
                value={emailid}
                onChange={(e) => setEmailId(e.target.value)}
                className="input"
                placeholder="Enter your Email"
              />
            </fieldset>
            <fieldset className="fieldset mb-1">
              <legend className="fieldset-legend text-xl">Password</legend>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="Enter your password"
              />
            </fieldset>
            <p className="p-4 m-2 cursor-pointer" onClick={toggleSignForm}>
              {isSignIn
                ? "Alredy a user sign-in"
                : "New to Netflix? Sign up now"}
            </p>
          </div>
          <div className="card-actions mt-1">
            <button
              onClick={isSignIn ? handleRegister : handleSignIn}
              className="btn btn-primary"
            >
              {isSignIn ? "Sign Up" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
