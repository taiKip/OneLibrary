import React from "react";
import classes from "./Sidebar.module.css";
import { FaWarehouse } from "react-icons/fa";
import { BiBookAdd } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { pageType } from "../Layout/Layout";
type sideBarType = {
  switchPage: (arg: pageType) => void;
  page: pageType;
};
const Sidebar = ({ switchPage, page }: sideBarType) => {
  return (
    <section className={classes.menu}>
      <button
        onClick={() => switchPage("DASHBOARD")}
        className={`${classes.menu__btn} ${
          page === "DASHBOARD" && classes["menu__btn--active"]
        }`}>
        <FaWarehouse />
        <span>DASHBOARD</span>
      </button>
      <button
        onClick={() => switchPage("ALLBOOKS")}
        className={`${classes.menu__btn} ${
          page === "ALLBOOKS" && classes["menu__btn--active"]
        }`}>
        <ImBooks />
        <span>ALL BOOKS</span>
      </button>
      <button
        onClick={() => switchPage("ADDBOOK")}
        className={`${classes.menu__btn} ${
          page === "ADDBOOK" && classes["menu__btn--active"]
        }`}>
        <BiBookAdd />
        <span>ADD BOOK</span>
      </button>
      <button
        onClick={() => switchPage("MEMBERS")}
        className={`${classes.menu__btn} ${
          page === "MEMBERS" && classes["menu__btn--active"]
        }`}>
        <BsFillPeopleFill />
        <span>MEMBERS</span>
      </button>
    </section>
  );
};

export default Sidebar;
