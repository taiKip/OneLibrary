import React from "react";
import {  publishType } from "../../types";

import classes from "./BookForm.module.css";
import { formSectionPropType } from "./types";

const PublishDetails = ({prevPage,setIsbn,setPublishDate,setPublisher}:formSectionPropType & publishType) => {
  return (
    <section className={classes.form__item}>
      <h4 className={classes.form__title}>ADD PUBLISHING DETAILS</h4>
      <div className={classes["form__input-wrapper"]}>
        <label htmlFor="Year" className={classes.form__label} >
          PublishedDate:
        </label>
        <input type="text" id="title" className={classes.form__input}  required onChange={e=>setPublishDate(e.target.value)} />
      </div>
      <div className={classes["form__input-wrapper"]}>
        <label htmlFor="ISBN" className={classes.form__label}>
          ISBN:
        </label>
        <input type="text" id="ISBN" className={classes.form__input} required onChange={(e)=>setIsbn(e.target.value)}/>
      </div>
      <div className={classes["form__input-wrapper"]}>
        <label htmlFor="publisher" className={classes.form__label}>
          Publisher:
        </label>
        <input type="text" id="publisher" className={classes.form__input} required onChange={e=>setPublisher(e.target.value)}/>
      </div>
      <div className={classes["form__controls"]}>
        <button className={classes.form__btn} onClick={prevPage}>Previous</button>
        <button className={classes.form__btn} type='submit' >Submit</button>
      </div>
    </section>
  );
};

export default PublishDetails;
