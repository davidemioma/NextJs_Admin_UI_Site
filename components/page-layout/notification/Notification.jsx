import React from "react";
import { useSelector } from "react-redux";
import { chatData } from "../../../data/dummy";
import PopUp from "../popup-layout/PopUp";
import classes from "./Notification.module.css";

const Notification = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className={classes.container}>
      <PopUp data={chatData} title="Notification" text="See all notification">
        <div className={classes.lists}>
          {chatData.map((item, i) => (
            <div
              key={i}
              className={classes.item}
              style={{ borderColor: mode === "dark" ? "#262626" : "lightgray" }}
            >
              <img src={item.image} alt="" />

              <div>
                <h4 className={classes.title}>{item.message}</h4>

                <p>
                  {item.message}
                  <br />
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PopUp>
    </div>
  );
};

export default Notification;
