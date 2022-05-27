import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { useSelector } from "react-redux";
import classes from "./Header.module.css";

const Header = ({ earningData }) => {
  const mode = useSelector((state) => state.theme.mode);

  const color = useSelector((state) => state.theme.color);

  return (
    <div className={mode === "dark" ? classes.dark : classes.light}>
      <div className={classes.earnings}>
        <img
          src="https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg"
          alt=""
        />

        <div className={classes.info}>
          <h4>Earnings</h4>

          <p>$63,448.78</p>
        </div>

        <button
          className={`icon_btn ${classes.currency}`}
          style={{ background: color }}
        >
          <BsCurrencyDollar fontSize="25px" color="#fff" />
        </button>

        <button
          className={`ecom_btn ${classes.btn}`}
          style={{ background: color }}
        >
          Download
        </button>
      </div>

      <div className={classes.earnings_list}>
        {earningData?.map((item, i) => (
          <div key={i} className={classes.item}>
            <button
              className="icon_btn"
              style={{
                background: item.iconBg,
                color: item.iconColor,
                fontSize: "25px",
              }}
            >
              {item.icon}
            </button>

            <p>
              <span>{item.amount}</span>

              <span className={classes.p_text} style={{ color: item.pcColor }}>
                {item.percentage}
              </span>
            </p>

            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
