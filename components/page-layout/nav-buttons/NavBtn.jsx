import React from "react";
import { useSelector } from "react-redux";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import classes from "./NavBtn.module.css";

const NavBtn = ({ title, icon, customFunc, dotColor }) => {
  const color = useSelector((state) => state.theme.color);

  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        className={classes.nav_btn}
        type="button"
        style={{ color }}
        onClick={() => customFunc()}
      >
        {dotColor && (
          <span className={classes.dot} style={{ background: dotColor }} />
        )}

        {icon}
      </button>
    </TooltipComponent>
  );
};

export default NavBtn;
