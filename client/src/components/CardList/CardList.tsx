import {useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react';

import Card from "../Card/Card";
import classes from "./CardList.module.css";
import { AppDispatch, RootState } from '../../app/store';
import {fetchBooks} from '../../features/books/bookSlice'
import Paginate from '../Paginate/Paginate';

const CardList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const booksStatus = useSelector((state: RootState) => state.books.status)
  const booksError = useSelector((state: RootState) => state.books.error);
  const books = useSelector((state: RootState) => state.books.books);
  const pageNumber  = useSelector((state:RootState)=>state.pages.page)
  useEffect(() => {
    if (booksStatus === "IDLE") {
      dispatch(fetchBooks());
}
  }, [booksStatus,dispatch])

  return (
    <div className={classes.wrapper}>
      <ul className={classes["card-list"]}>
        {booksError && <p>Something went wrong...</p>}
       {(booksStatus ==="LOADING") && <p>Loading...</p>}
        {books && books.map(book => <Card thumbnailUrl={book.thumbnailUrl} title={book.title} key={book._id} isBorrowed={book.isBorrowed} _id={book._id} />)}
          </ul>
     <Paginate/>
    </div>
  );
};

export default CardList;
