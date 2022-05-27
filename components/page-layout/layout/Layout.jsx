import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { setSettings } from "../../../store/store";
import SideBar from "../sidebar/SideBar";
import Nav from "../navbar/Nav";
import Settings from "../settings_bar/Settings";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.theme.mode);

  const color = useSelector((state) => state.theme.color);

  const sidebarOpen = useSelector((state) => state.ui.sidebarOpen);

  const settingsOpen = useSelector((state) => state.ui.settingsOpen);

  return (
    <div
      className={`${classes.layout} ${
        mode === "dark" ? classes.dark_mode : classes.light_mode
      }`}
    >
      {sidebarOpen && (
        <div className={classes.mobile}>
          <SideBar />
        </div>
      )}

      {sidebarOpen && (
        <div className={classes.desktop}>
          <SideBar />
        </div>
      )}

      <div className={classes.contents}>
        <Nav />

        <div>
          {children}

          <div className={classes.setting_icon}>
            <TooltipComponent content="Settings" position="TopLeft">
              <button
                onClick={() => dispatch(setSettings(true))}
                style={{ background: color }}
              >
                <FiSettings fontSize="35px" color="white" />
              </button>
            </TooltipComponent>
          </div>
        </div>

        {settingsOpen && <Settings />}
      </div>
    </div>
  );
};

export default Layout;
