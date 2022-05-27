import React from "react";
import classes from "./PageHeader.module.css";

const PageHeader = ({ category, title }) => {
  return (
    <div className={classes.page_header}>
      <h4>{category}</h4>

      <p>{title}</p>
    </div>
  );
};

export default PageHeader;
