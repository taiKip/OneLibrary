import Hero from "../Hero/Hero";
import SignUp from "../SignUp/SignUp";

import classes from "./LoginPrompt.module.css";

const LoginPrompt = () => {
  return (
    <div className={classes.wrapper}>
      <div>
        <SignUp />
      </div>
      <div>
        <Hero />
      </div>
    </div>
  );
};

export default LoginPrompt;
