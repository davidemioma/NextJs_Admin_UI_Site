import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSideBar } from "../../../store/store";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import NavBtn from "../nav-buttons/NavBtn";
import Cart from "../cart/Cart";
import Chat from "../chat/Chat";
import Profile from "../user-profile/Profile";
import Notification from "../notification/Notification";
import { setIsClicked } from "../../../store/store";
import classes from "./Nav.module.css";

const Nav = () => {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.theme.mode);

  const color = useSelector((state) => state.theme.color);

  const sidebarOpen = useSelector((state) => state.ui.sidebarOpen);

  const isClicked = useSelector((state) => state.ui.isClicked);

  return (
    <div className={classes.container}>
      <NavBtn
        customFunc={() => dispatch(setSideBar(!sidebarOpen))}
        title="Menu"
        icon={<AiOutlineMenu fontSize="20px" />}
      />

      <div className={classes.left}>
        <NavBtn
          customFunc={() => dispatch(setIsClicked("cart"))}
          title="Search"
          icon={<FiShoppingCart fontSize="20px" />}
        />

        <NavBtn
          customFunc={() => dispatch(setIsClicked("chat"))}
          title="Chat"
          icon={<BsChatLeft fontSize="20px" />}
          dotColor={color}
        />

        <NavBtn
          customFunc={() => dispatch(setIsClicked("notification"))}
          title="Notification"
          icon={<RiNotification3Line fontSize="20px" />}
          dotColor="rgb(254, 201, 15)"
        />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className={classes.profile}
            onClick={() => dispatch(setIsClicked("userProfile"))}
          >
            <img src="./assets/avatar.jpg" alt="" />

            <p>
              <span style={{ color: mode === "dark" ? "grey" : "black" }}>
                Hi,{" "}
              </span>

              <span
                style={{
                  color: mode === "dark" ? "grey" : "black",
                  fontWeight: "bold",
                }}
              >
                Michael
              </span>
            </p>

            <MdKeyboardArrowDown
              color={mode === "dark" ? "grey" : "black"}
              fontSize="20px"
            />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}

        {isClicked.chat && <Chat />}

        {isClicked.notification && <Notification />}

        {isClicked.userProfile && <Profile />}
      </div>
    </div>
  );
};

export default Nav;
