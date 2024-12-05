import React from "react";
import classes from "../Loader/Loader.module.css"; 

const Loader = () => {
  return (
    <div className="loader-container">
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
