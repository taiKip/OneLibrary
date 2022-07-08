import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { increment, decrement } from "../../features/utils/utilsSlice";
import classes from "./Paginate.module.css";

const Paginate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pageNumber = useSelector((state: RootState) => state.pages.page);
  const handleNextPage = () => {
    console.log("clicked");
    dispatch(increment());
  };
  const handlePrevPage = () => {
    if (pageNumber > 1) {
      dispatch(decrement());
    }
  };
  return (
    <div className={classes.paginate}>
      <button className={classes.paginate__btn} onClick={handlePrevPage} disabled={pageNumber===1}>
        Previous
      </button>
      <button className={classes.paginate__btn} onClick={handleNextPage}>
        Next
      </button>
    </div>
  );
};

export default Paginate;
