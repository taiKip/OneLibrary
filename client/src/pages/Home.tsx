import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Navbar/Navbar";

import classes from "./Home.module.css";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  const style = !loaded ? classes.hide : "";
  const handleOnload = () => {
    setLoaded(true);
  };
  const url =
    "https://burgerapp-photo-bucket.s3.eu-north-1.amazonaws.com/admin-background.jpg";
  return (
    <div className={classes.wrapper}>
      <div>
        <img
          src={url}
          className={style}
          onLoad={handleOnload}
          alt="books in shelf"
        />
      </div>
      <div className={classes["admin-panel"]}>
        <Navbar />
        <Layout />
      </div>
    </div>
  );
};

export default Home;
