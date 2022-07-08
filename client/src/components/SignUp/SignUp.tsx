import {
  useState,
  useEffect,
  useRef,
  ChangeEventHandler,
  FormEvent,
} from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { FaAsterisk, FaCheck, FaUserPlus } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import axios from "../../api/axios";
import { SIGN_UP_URL } from "../../api/routes";
import { EMAIL_REGEX, NAME_REGEX, PWD_REGEX } from "../../regex/regex";

import classes from "./SignUp.module.css";
import styles from "../BookForm/BookForm.module.css";

const SignUp = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);

  const errRef = useRef<HTMLInputElement>(null);

  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatchPwd, setValidMatchPwd] = useState(false);

  const [error, setError] = useState("");
  const [status, setStatus] = useState(200);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    firstNameRef?.current?.focus();
  }, []);
  useEffect(() => {
    status === 409 && errRef?.current?.focus();
  }, [status]);
  //validate Name
  useEffect(() => {
    const isFirstValid = NAME_REGEX.test(firstName);
    setValidFirstName(isFirstValid);
  }, [firstName]);
  useEffect(() => {
    const isLastValid = NAME_REGEX.test(lastName);
    setValidLastName(isLastValid);
  }, [lastName]);
  useEffect(() => {
    const isEmailValid = EMAIL_REGEX.test(email);
    setValidEmail(isEmailValid);
  }, [email]);
  //Validate password
  useEffect(() => {
    const isPwdValid = PWD_REGEX.test(pwd);
    setValidPwd(isPwdValid);
    if (pwd && matchPwd) {
      const match = pwd === matchPwd;

      setValidMatchPwd(match);
    }
  }, [pwd, matchPwd]);
  //error message
  useEffect(() => {
    setError("");
  }, [firstName, lastName, pwd, matchPwd]);

  const handleFirstNameChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFirstName(event.target.value.trim());
  };
  const handleLastNameChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setLastName(event.target.value.trim());
  };
  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value.trim());
  };
  const handlePwdChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPwd(event.target.value.trim());
  };
  const handleMatchPwdChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setMatchPwd(event.target.value.trim());
  };
  //Google auth

  const responseGoogle = (response: any) => {
    console.log(response);
  };
  //Submit Form
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log("in the submit handler");
    if (
      !NAME_REGEX.test(firstName) ||
      !NAME_REGEX.test(lastName) ||
      !PWD_REGEX.test(pwd) ||
      !EMAIL_REGEX.test(email)
    ) {
      setError("Invalid input");
      return;
    }
    console.log("Here");
    try {
      await axios.post(
        SIGN_UP_URL,
        JSON.stringify({
          firstName,
          lastName,
          email,
          password: pwd,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setSuccess(true);
      setEmail("");
      setPwd("");
      setMatchPwd("");
      setFirstName("");
      setLastName("");
    } catch (err: any) {
      if (!err?.response) {
        setError("No Server Response");
      }
      if (err?.response.status === 409) {
        setError("Another user with this email already exists");
        setStatus(409);
      } else {
        setError("Registration Failed");
      }
    }
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h4 className={styles.form__title}>Sign Up</h4>
      <p className={`${classes.form__error} ${error && classes.show}`}>
        <BsFillInfoCircleFill /> {error}
      </p>
      <div className={styles["form__input-wrapper"]}>
        <label htmlFor="firstName" className={styles.form__label}>
          First Name:
          <span
            className={`${styles.form__required} ${
              (validFirstName || !firstName) && styles.hide
            }`}>
            <FaAsterisk />
          </span>
          <span
            className={`${styles.form__valid} ${
              (!validFirstName || !firstName) && styles.hide
            }`}>
            <FaCheck />
          </span>
        </label>
        <input
          ref={firstNameRef}
          type="text"
          id="firstName"
          value={firstName}
          className={styles.form__input}
          required
          onChange={handleFirstNameChange}
        />
      </div>
      <div className={styles["form__input-wrapper"]}>
        <label htmlFor="lastName" className={styles.form__label}>
          Last Name:
          <span
            className={`${styles.form__required} ${
              (validLastName || !lastName) && styles.hide
            }`}>
            <FaAsterisk />
          </span>
          <span
            className={`${styles.form__valid} ${
              (!validLastName || !lastName) && styles.hide
            }`}>
            <FaCheck />
          </span>
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          className={styles.form__input}
          required
          onChange={handleLastNameChange}
        />
      </div>
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
          ref={errRef}
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
              (validPwd || !pwd || validMatchPwd) && styles.hide
            }`}>
            <FaAsterisk />
          </span>
          <span
            className={`${styles.form__valid} ${
              (!validPwd || !pwd || !validMatchPwd) && styles.hide
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
      <div className={styles["form__input-wrapper"]}>
        <label htmlFor="headline" className={styles.form__label}>
          Confirm Password:
          <span
            className={`${styles.form__required} ${
              (validMatchPwd || !matchPwd) && styles.hide
            }`}>
            <FaAsterisk />
          </span>
          <span
            className={`${styles.form__valid} ${
              (!validMatchPwd || !matchPwd) && styles.hide
            }`}>
            <FaCheck />
          </span>
        </label>
        <input
          type="password"
          id="confirmpassword"
          className={styles.form__input}
          required
          value={matchPwd}
          onChange={handleMatchPwdChange}
        />
      </div>
      <div className={styles["form__input-wrapper"]}>
        <p>Already have an account?</p>
        <div className={classes.form__signIn}>
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <button type="button">
            <FiLogIn /> Sign In
          </button>
        </div>
      </div>
      <div className={styles["form__controls"]}>
        <button
          type="submit"
          disabled={
            !validFirstName ||
            !validLastName ||
            !validEmail ||
            !validPwd ||
            !validMatchPwd
          }
       className={classes.form__submit}>
          <FaUserPlus />
          <Link to="/home" >Sign up</Link>
        </button>
      </div>
    </form>
  );
};

export default SignUp;
