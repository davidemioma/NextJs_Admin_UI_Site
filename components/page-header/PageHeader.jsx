import React from "react";
import { useSelector } from "react-redux";
import classes from "./PageHeader.module.css";

const PageHeader = ({ category, title }) => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className={classes.page_header}>
      <h4>{category}</h4>

      <p style={{ color: mode === "dark" && "#fff" }}>{title}</p>
    </div>
  );
};

export default PageHeader;
