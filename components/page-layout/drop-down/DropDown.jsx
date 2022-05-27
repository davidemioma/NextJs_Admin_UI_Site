import React from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import classes from "./DropDown.module.css";

const DropDown = ({ mode, data }) => {
  return (
    <div className={classes.dropdown}>
      <DropDownListComponent
        id="time"
        fields={{ text: "Time", value: "Id" }}
        style={{ border: "nome", color: mode === "Dark" && "white" }}
        value="1"
        dataSource={data}
        popupHeight="220px"
        popupWidth="120px"
      />
    </div>
  );
};

export default DropDown;
