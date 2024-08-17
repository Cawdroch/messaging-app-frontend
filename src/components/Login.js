import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "../firebase";

const Login = () => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="logo512.png" alt="whatsapp" />
        <div className="login__text">
          <h1>Sign In To Messaging App</h1>
        </div>
        <button onClick={signIn}>Sign In With Google</button>
      </div>
    </div>
  );
};

export default Login;
