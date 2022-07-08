
import { useSelector } from "react-redux";
import {  RootState } from "../../app/store";

import classes from "./BookForm.module.css";

import { formSectionPropType } from "./types";
import {  useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import { bookProfilePropsType, selectOptionsType } from "../../types";

const BookProfile = ({
  nextPage,
  setAuthors,
  setDescription,
  setTitle,
}: formSectionPropType & bookProfilePropsType) => {
  const authors = useSelector((state: RootState) => state.authors.authors);

  let options: selectOptionsType[] = [];
  authors.map((author) => {
    options.push({
      value: author._id,
      label: `${author.name}`,
    });
  });

  return (
    <section className={classes.form__item}>
      <h4 className={classes.form__title}>CREATE BOOK PROFILE</h4>
      <div className={classes["form__input-wrapper"]}>
        <label htmlFor="title" className={classes.form__label}>
          Title:
        </label>
        <input
          type="text"
          id="title"
          className={classes.form__input}
          placeholder="Title"
          onChange={(e)=>setTitle(e.target.value)}
        />
      </div>
      <div className={classes["form__input-wrapper"]}>
        <label htmlFor="author" className={classes.form__label}>
          Author:
        </label>
        <div className={classes.form__select}>
          <CustomSelect options={options} handleSelect={setAuthors} />
        </div>
      </div>
      <div className={classes["form__input-wrapper"]}>
        <label htmlFor="headline" className={classes.form__label}>
          Description:
        </label>
        {/* short description */}
        <textarea
          id="headline"
          rows={4}
          cols={50}
          className={classes.form__input}
          onChange={(e)=>setDescription(e.target.value)}
        />
      </div>
      <button className={classes["form__btn"]} onClick={nextPage}>
        Next
      </button>
    </section>
  );
};

export default BookProfile;
