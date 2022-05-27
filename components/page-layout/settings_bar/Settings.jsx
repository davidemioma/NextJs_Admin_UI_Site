import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { themeColors } from "../../../data/dummy";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { setSettings, setMode, setColor } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import Overlay from "../overlay/Overlay";
import classes from "./Settings.module.css";

const Settings = () => {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.theme.mode);

  const color = useSelector((state) => state.theme.color);

  return (
    <Overlay>
      <div className={classes.container}>
        <div
          className={classes.header}
          style={{ borderColor: mode === "dark" ? "#262626" : "lightgray" }}
        >
          <span>Settings</span>

          <button>
            <MdOutlineCancel
              onClick={() => dispatch(setSettings(false))}
              fontSize="23px"
              color={mode === "dark" ? "grey" : "#a6a6a6"}
            />
          </button>
        </div>

        <div
          className={classes.mode}
          style={{ borderColor: mode === "dark" ? "#262626" : "lightgray" }}
        >
          <h2>Theme Options</h2>

          <div className={classes.set_mode}>
            <input
              id="light"
              type="radio"
              value="light"
              onChange={() => dispatch(setMode("light"))}
              checked={mode === "light"}
            />

            <label htmlFor="light">Light</label>
          </div>

          <div className={classes.set_mode}>
            <input
              id="dark"
              type="radio"
              value="dark"
              onChange={(e) => dispatch(setMode("dark"))}
              checked={mode === "dark"}
            />

            <label htmlFor="dark">Dark</label>
          </div>
        </div>

        <div className={classes.colors}>
          <h2>Theme Colors</h2>

          <div className={classes.color_list}>
            {themeColors.map((item, i) => (
              <TooltipComponent
                key={i}
                content={item.name}
                position="TopCenter"
              >
                <div className={classes.color}>
                  <button
                    onClick={() => dispatch(setColor(item.color))}
                    type="button"
                    style={{ background: item.color }}
                  >
                    {item.color === color && (
                      <BsCheck className={classes.check_icon} />
                    )}
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default Settings;
