import React from "react";
import { useSelector } from "react-redux";
import classes from "./Overlay.module.css";

const Overlay = ({ children }) => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <>
      <div className={classes.backdrop}></div>

      <div
        className={mode === "dark" ? classes.modal_dark : classes.modal_light}
      >
        {children}
      </div>
    </>
  );
};

export default Overlay;
