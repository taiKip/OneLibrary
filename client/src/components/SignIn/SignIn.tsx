import {
  useState,
  useEffect,
  useRef,
  ChangeEventHandler,
  FormEvent,
} from "react";
import { FaAsterisk, FaCheck } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { EMAIL_REGEX, PWD_REGEX } from "../../regex/regex";

import Info from "../SignUp/Info";
import classes from "../SignUp/SignUp.module.css";
import styles from "../BookForm/BookForm.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useSelector } from "react-redux";

const SignIn = () => {

  const dispatch = useDispatch<AppDispatch>()
 const auth = useSelector((state:RootState)=>state.auth)
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
  useEffect(() => {
    const isEmailValid = EMAIL_REGEX.test(email);
    setValidEmail(isEmailValid);
  }, [email]);
  //Validate password
  useEffect(() => {
    const isPwdValid = PWD_REGEX.test(pwd);
    setValidPwd(isPwdValid);
  }, [pwd]);

  //submit form
  const handleSubmit = (event:FormEvent) => {
    event.preventDefault()
    console.log(email,pwd)
  }
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
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
        <Info
          id="emailNote"
          extra="Not a valid email address"
          show={validEmail || !email}
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
        <Info
          characters="6"
          id="pwdNote"
          field="password"
          extra=",have atleast one uppercase, one lowercase letter ,one special character and a digit"
          show={validPwd || !pwd}
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={!validEmail || !validPwd}
          className={classes.form__submit}>
          <FiLogIn /> Sign In
        </button>
      </div>
    </form>
  );
};

export default SignIn;
