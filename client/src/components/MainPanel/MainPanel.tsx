import { ImBooks } from "react-icons/im";
import { GiReturnArrow } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import classes from "./MainPanel.module.css";
const MainPanel = () => {
  return (
    <div className={classes.main__panel}>
      <div className={classes.info}>
        <span
          className={`${classes.info__icon} ${classes["info__icon--first"]}`}>
          <ImBooks />
        </span>
        <span>
          <span>Total Books</span>
          <h3>232</h3>
        </span>
      </div>
      <div className={classes.info}>
        <span
          className={`${classes.info__icon} ${classes["info__icon--second"]}`}>
          <ImBooks />
        </span>
        <span>
          <span>New Books</span>
          <h3>232</h3>
        </span>
      </div>
      <div className={classes.info}>
        <span
          className={`${classes.info__icon} ${classes["info__icon--third"]}`}>
          <IoIosPeople />
        </span>
        <span>
          <span>Total Members</span>
          <h3>232</h3>
        </span>
      </div>
      <div className={classes.info}>
        <span
          className={`${classes.info__icon} ${classes["info__icon--fourth"]}`}>
          <GiReturnArrow />
        </span>
        <span>
          <span>Books Not Returned</span>
          <h3>32</h3>
        </span>
      </div>
    </div>
  );
};

export default MainPanel;
