import React from "react";
import Circles from "../components/Circles/Circles";
import LoginPrompt from "../components/LoginPrompt/LoginPrompt";

import classes from "./LoginPage.module.css";
const LoginPage = () => {
  return (
    <div className={classes.wrapper}>
      <Circles />
      <LoginPrompt />
    </div>
  );
};

export default LoginPage;
