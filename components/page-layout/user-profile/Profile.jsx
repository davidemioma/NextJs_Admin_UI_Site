import React from "react";
import PopUp from "../popup-layout/PopUp";
import { userProfileData } from "../../../data/dummy";
import { useSelector } from "react-redux";
import classes from "./Profile.module.css";

const Profile = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className={classes.container}>
      <PopUp title="User Profile" text="Signout">
        <div
          className={classes.profile}
          style={{ borderColor: mode === "dark" ? "#262626" : "lightgrey" }}
        >
          <img src="./assets/avatar2.jpg" alt="" />

          <div>
            <h4>Michael Roberts</h4>

            <p>
              Administrator
              <br />
              info@shop.com
            </p>
          </div>
        </div>

        <div className={classes.lists}>
          {userProfileData.map((item, i) => (
            <div key={i} className={classes.item}>
              <div
                className={classes.icon}
                style={{ background: item.iconBg, color: item.iconColor }}
              >
                {item.icon}
              </div>

              <div className={classes.content}>
                <h4>{item.title}</h4>

                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </PopUp>
    </div>
  );
};

export default Profile;
