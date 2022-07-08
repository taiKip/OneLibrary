import React, { ReactNode } from "react";
import { pageType } from "../Layout/Layout";

import classes from "./Main.module.css";

type mainType = {
  children: ReactNode;
  role: string;
  page: pageType;
};

const Main = ({ children, role,page }: mainType) => {
  return (
    <div className={classes.main}>
      <div className={classes.main__header}>
              <h2>Welcome to {page.toLowerCase()}</h2>
              <span>{role}/{page.toLowerCase()}</span>
      </div>
      {children}
    </div>
  );
};

export default Main;
