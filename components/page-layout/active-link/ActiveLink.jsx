import React from "react";
import { useRouter } from "next/router";
import { setSideBar } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ActiveLink.module.css";

const ActiveLink = ({ children, href }) => {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.theme.mode);

  const color = useSelector((state) => state.theme.color);

  const router = useRouter();

  const autoCloseSidebar = () => {
    if (window.innerWidth < 700) {
      dispatch(setSideBar(false));
    }
  };

  const onClickHandler = () => {
    href !== "ecommerce" ? router.push(`/${href}`) : router.push("/");

    autoCloseSidebar();
  };

  return (
    <div
      className={`${classes.link_info} ${
        mode === "dark" ? classes.dark_mode : classes.light_mode
      }`}
      style={{
        background: router.asPath === href && color,
        borderRadius: router.asPath === href && "10px",
      }}
      onClick={onClickHandler}
    >
      {children}
    </div>
  );
};

export default ActiveLink;
