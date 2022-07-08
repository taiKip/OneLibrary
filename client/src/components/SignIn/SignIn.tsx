import {
  useState,
  useEffect,
  useRef,
  ChangeEventHandler,
  FormEvent,
} from "react";
import { FaAsterisk, FaCheck, FaUserPlus } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { BsFillInfoCircleFill } from "react-icons/bs";

import { EMAIL_REGEX, NAME_REGEX, PWD_REGEX } from "../../regex/regex";

import classes from "../SignUp.module.css";
import styles from "../BookForm/BookForm.module.css";

const SignIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value.trim());
  };
  const handlePwdChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPwd(event.target.value.trim());
  };
  return (
    <form className={classes.form}>
      <h4 className={styles.form__title}>Sign In</h4>
      <div className={styles["form__input-wrapper"]}>
        <label htmlFor="email" className={styles.form__label}>
          Email:
          <span
            className={`${styles.form__required} ${
              (validEmail || !email) && styles.hide
            }`}>
            <FaAsterisk />
          </span>
          <span
            className={`${styles.form__valid} ${
              (!validEmail || !email) && styles.hide
            }`}>
            <FaCheck />
          </span>
        </label>
        <input
          type="email"
          id="email"
          ref={emailRef}
          value={email}
          className={styles.form__input}
          required
          onChange={handleEmailChange}
        />
      </div>
      <div className={styles["form__input-wrapper"]}>
        <label htmlFor="password" className={styles.form__label}>
          Password:
          <span
            className={`${styles.form__required} ${
              (validPwd || !pwd) && styles.hide
            }`}>
            <FaAsterisk />
          </span>
          <span
            className={`${styles.form__valid} ${
              (!validPwd || !pwd) && styles.hide
            }`}>
            <FaCheck />
          </span>
        </label>
        <input
          type="password"
          id="password"
          value={pwd}
          className={styles.form__input}
          required
          onChange={handlePwdChange}
        />
      </div>
      <div>
        <button type="submit">
          <FiLogIn /> Sign In
        </button>
      </div>
    </form>
  );
};

export default SignIn;
