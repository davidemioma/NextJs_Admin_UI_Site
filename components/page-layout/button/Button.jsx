import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPopups } from "../../../store/store";
import classes from "./Button.module.css";

const Button = ({ text }) => {
  const dispatch = useDispatch();

  const color = useSelector((state) => state.theme.color);

  return (
    <div className={classes.view_btn}>
      <button
        onClick={() => dispatch(resetPopups())}
        style={{ background: color }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
