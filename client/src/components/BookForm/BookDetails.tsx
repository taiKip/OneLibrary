import AsyncSelect from "react-select/async";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import classes from "./BookForm.module.css";
import { formSectionPropType } from "./types";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { publishDetailsType, selectOptionsType } from "../../types";
import CustomSelect from "../CustomSelect/CustomSelect";
import { useDispatch } from "react-redux";
import {
  addNewImage,
  fetchImageUrl,
} from "../../features/uploadImage/uploadImage";

const BookDetails = ({
  nextPage,
  prevPage,
  setCategory,
  setHeadline,
  headline,
}: formSectionPropType & publishDetailsType) => {
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const url = useSelector((state: RootState) => state.imageUpload.url);
  const dispatch = useDispatch<AppDispatch>();
  const [image, setImage] = useState<any>(null);

  let options: selectOptionsType[] = [];
  categories.map((category) => {
    options.push({
      value: category._id,
      label: category.name,
    });
  });
  const handleImageUpload: ChangeEventHandler<HTMLInputElement> = async (e) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      dispatch(fetchImageUrl());
    }
    if (url) {
      // dispatch(addNewImage({ image, url }))
      console.log("Url: ", url);
    }
  };

  return (
    <section className={classes.form__item}>
      <h4 className={classes.form__title}>CREATE BOOK DETAILS</h4>
      <div className={classes["form__input-wrapper"]}>
        <label htmlFor="img" className={classes.form__label}>
          Select image:
        </label>
        <input
          type="file"
          id="img"
          accept="image"
          className={classes.form__input}
          onChange={handleImageUpload}
        />
      </div>
      <div className={classes["form__input-wrapper"]}>
        <label htmlFor="Category" className={classes.form__label}>
          Category:
        </label>
        <div className={classes.form__select}>
          <CustomSelect options={options} handleSelect={setCategory} />
        </div>
      </div>
      <div className={classes["form__input-wrapper"]}>
        <label htmlFor="headline" className={classes.form__label}>
          Headline:
        </label>
        <input
          type="text"
          id="headline"
          className={classes.form__input}
          required
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />
      </div>
      <div className={classes["form__controls"]}>
        <button className={classes.form__btn} onClick={prevPage}>
          Previous
        </button>
        <button className={classes.form__btn} onClick={nextPage}>
          Next
        </button>
      </div>
    </section>
  );
};

export default BookDetails;
