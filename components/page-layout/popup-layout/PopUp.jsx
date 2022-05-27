import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineCancel } from "react-icons/md";
import { resetPopups } from "../../../store/store";
import Button from "../button/Button";
import classes from "./PopUp.module.css";

const PopUp = ({ children, title, data, text }) => {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className={mode === "dark" ? classes.bg_dark : classes.bg_light}>
      <div className={classes.header}>
        <div>
          <h4>{title}</h4>

          {data && <p>{data.length} New</p>}
        </div>

        <button>
          <MdOutlineCancel
            onClick={() => dispatch(resetPopups())}
            fontSize="20px"
            color={mode === "dark" ? "grey" : "#a6a6a6"}
          />
        </button>
      </div>

      <div className={classes.children}>{children}</div>

      <Button text={text} />
    </div>
  );
};

export default PopUp;
