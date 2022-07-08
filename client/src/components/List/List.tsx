import React from "react";
import ListItem from "../ListItem/ListItem";

import classes from "./List.module.css";

type listType = {
  title: string;
};
const List = ({ title }: listType) => {
  const arr = [1, 2, 3, 4];
  return (
    <div className={classes.wrapper}>
      <h3>{title}</h3>
      <ul className={classes.list}>
        {arr.map((item) => (
          <ListItem />
        ))}
      </ul>
      <button className={classes.btn}>List All</button>
    </div>
  );
};

export default List;
