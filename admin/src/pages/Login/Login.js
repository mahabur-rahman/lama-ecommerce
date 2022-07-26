import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // using redux toolkit
  const dispatch = useDispatch();

  // handleClick
  const handleClick = (e) => {
    e.preventDefault();

    // call my func
    login(dispatch, { username, password });

    // you can see res in ( application ) menu when user login TOKEN will be changed as per click
  };

  return (
    <>
      <div
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleClick}>Login</button>
      </div>
    </>
  );
};

export default Login;
