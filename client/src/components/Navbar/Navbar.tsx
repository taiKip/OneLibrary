import React from "react";
import Logo from "../../assets/Logo.svg";
import { FaBell, FaEnvelope ,FaShoppingCart} from "react-icons/fa";
import classes from "./Navbar.module.css";
import Profile from "../../assets/testProfile.jpg";
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <object data={Logo} type="image/svg+xml" className={classes.logo} />
      <button className={classes["dd-toggle"]}>
        <div className={classes.notification}></div>
        <FaEnvelope />
      </button>
      <button className={classes["dd-toggle"]}>
        <div className={classes.notification}></div>
        <FaShoppingCart />
      </button>
      <button className={classes["dd-toggle"]}>
        <div className={classes.notification}></div>
        <FaBell />
      </button>
      <button className={classes["dd-toggle"]}>
        <img
          src={Profile}
          alt="user Photo"
          className={classes["dd-toggle__img"]}
        />
        <span>Tarus V.</span>
      </button>
      < button className={classes.hambuger}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
