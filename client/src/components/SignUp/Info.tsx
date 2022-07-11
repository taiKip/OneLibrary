
import classes from './SignUp.module.css'
import { BsFillInfoCircleFill } from "react-icons/bs";
type infoPropType = {
    id: string,
    field?: string,
    characters?: string
    extra?: string
    show:boolean
}
const Info = ({id,field,characters,extra,show}:infoPropType) => {
  return (
    <p
      className={`${classes.form__guide} ${
        (id === "pwdNote") && classes.extra
      } ${show && classes.offScreen}`}>
      <div>
        <BsFillInfoCircleFill />
      {!field &&   <span id={id}>
           {extra}
        </span>}
        {field && (
          <span id={id}>
            {field} has to be atleast {characters} characters {extra}
          </span>
        )}
      </div>
    </p>
  );
}

export default Info