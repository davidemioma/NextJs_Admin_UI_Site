import React from "react";
import { useSelector } from "react-redux";
import { cartData } from "../../../data/dummy";
import Overlay from "../overlay/Overlay";
import PopUp from "../popup-layout/PopUp";
import classes from "./Cart.module.css";

const Cart = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <Overlay>
      <PopUp title="Shopping Cart" text="Place Order">
        <div className={classes.lists}>
          {cartData.map((item, i) => (
            <div
              key={i}
              className={classes.item}
              style={{ borderColor: mode === "dark" ? "#262626" : "lightgray" }}
            >
              <img src={item.image} alt="" />

              <div className={classes.contents}>
                <h4>{item.name}</h4>

                <p>{item.category}</p>

                <div className={classes.price}>
                  <h3>{item.price}</h3>

                  <div className={classes.price_controls}>
                    <div className={classes.red}>-</div>

                    <div className={classes.green}>0</div>

                    <div className={classes.green}>+</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={classes.checkout_info}>
          <span>Sub Total</span>

          <span>$890</span>
        </div>

        <div className={classes.checkout_info}>
          <span>Total</span>

          <span>$890</span>
        </div>
      </PopUp>
    </Overlay>
  );
};

export default Cart;
