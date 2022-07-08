import { formStepsPropsType } from "../types";
import classes from "./FormSteps.module.css";

const FormSteps = ({currPage}:formStepsPropsType) => {
  return (
    <div className={classes["form-step"]}>

      <span className={`${classes["form-step__avatar__one"]} ${currPage===1?classes.active :""}`}>1</span>
      <span className={classes["form-step__description__one"]}>Book Profile</span>

      <span className={classes["form-step__transition__one"]}></span>

      <span className={`${classes["form-step__avatar__two"]} ${currPage === 2 ? classes.active : ""}`}>2</span>
      <span className={classes["form-step__description__two"]}>Book Details</span>

      <span className={classes["form-step__transition__two"]}></span>

      <span className={`${classes["form-step__avatar__three"]} ${currPage === 3 ? classes.active : ""}`}>3</span>
      <span className={classes["form-step__description__three"]}>
        Publishing Details
      </span>
    </div>
  );
};

export default FormSteps;
