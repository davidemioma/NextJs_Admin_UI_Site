import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../../../data/dummy";
import { setSideBar } from "../../../store/store";
import ActiveLink from "../active-link/ActiveLink";
import classes from "./SideBar.module.css";

const SideBar = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const mode = useSelector((state) => state.theme.mode);

  const color = useSelector((state) => state.theme.color);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.logo} onClick={() => router.push("/")}>
          <SiShopware
            fontSize="25px"
            color={mode === "dark" ? "#FFF" : "black"}
          />

          <span>Shoopy</span>
        </div>

        <div className={classes.cancel_btn}>
          <TooltipComponent content="Menu" position="BottomCenter">
            <MdOutlineCancel
              fontSize="20px"
              color={color}
              onClick={() => dispatch(setSideBar(false))}
            />
          </TooltipComponent>
        </div>
      </div>

      <div className={classes.contents}>
        {links.map((link) => (
          <div key={link.title} className={classes.link_item}>
            <h4>{link.title}</h4>

            {link.links.map((item) => (
              <ActiveLink
                key={item.name}
                href={item.name !== "ecommerce" ? `/${item.name}` : "/"}
              >
                <div
                  className={
                    mode === "dark" ? classes.icon_dark : classes.icon_light
                  }
                >
                  {item.icon}
                </div>

                <p className={classes.name}>{item.name}</p>
              </ActiveLink>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
