import {useState} from "react";
import Book from "../../assets/book.jpg";
import { MdAddShoppingCart } from "react-icons/md";
import classes from "./Card.module.css";
import { bookType } from "../../types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { borrowBook } from "../../features/books/bookSlice";

const Card = ({ thumbnailUrl, title, isBorrowed, _id }: bookType) => {
  const dispatch = useDispatch<AppDispatch>()
  
  const [loaded, setLoaded] = useState(false);
  const style = !loaded ? classes.hide : "";
  const handleClick = () => {
    dispatch(borrowBook());
  }
  return (
    <li className={classes.card} key={_id}>
      <img
        src={thumbnailUrl}
        onLoad={() => setLoaded(true)}
        alt="book"
        className={`${classes.card__img} ${style}`}
      />
      <button className={classes.card__cart}>
        <MdAddShoppingCart />
      </button>
      <span className={`${classes.card__status} ${isBorrowed && classes.borrowed}`}>
        {isBorrowed ? "not available" : "available"}
      </span>
      <div className={classes.card__description}></div>
      <div className={classes.card__controls}>
        <div className={classes.card__details}>
          <h4>{title}</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <button className={classes.card__view}>
          <a href="#">view</a>
        </button>
      </div>
    </li>
  );
};

export default Card;
