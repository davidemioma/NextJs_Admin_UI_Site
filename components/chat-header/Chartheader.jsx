import React from "react";
import { useSelector } from "react-redux";
import classes from "./ChartHeader.module.css";

const Chartheader = ({ category, title }) => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className={classes.chart_header}>
      <h4>{category}</h4>

      <p style={{ color: mode === "dark" ? "#fff" : "black" }}>{title}</p>
    </div>
  );
};

export default Chartheader;
