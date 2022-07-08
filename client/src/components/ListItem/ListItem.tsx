import React from "react";
import Profile from "../../assets/testProfile.jpg";
import classes from "./ListItem.module.css";

const ListItem = () => {
  return (
    <li className={classes.listItem}>
      <img src={Profile} alt="image" className={classes.listItem__img} />
      <span>Victor Tarus</span>
      <span>02</span>
    </li>
  );
};

export default ListItem;
