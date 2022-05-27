import React from "react";
import { useSelector } from "react-redux";
import { IoIosMore } from "react-icons/io";
import LineChart from "../../page-layout/charts/LineChart";
import DropDown from "../../page-layout/drop-down/DropDown";
import SparkLine from "../../page-layout/charts/SparkLine";
import Footer from "../../page-layout/footer/Footer";
import classes from "./Transactions.module.css";

const Transactions = ({
  dropDownData,
  recentTransaction,
  weeklyStats,
  sparkLineAreaData,
  medicalproBranding,
}) => {
  const mode = useSelector((state) => state.theme.mode);

  const color = useSelector((state) => state.theme.color);

  if (typeof window === "undefined") {
    return;
  }

  return (
    <div className={mode === "dark" ? classes.dark : classes.light}>
      <div className={classes.transactions}>
        <div className={classes.t_header}>
          <p>Recent Transactions</p>

          <DropDown mode={mode} data={dropDownData} />
        </div>

        <div
          className={classes.t_list}
          style={{
            borderColor: mode === "dark" ? "#262626" : "lightgrey",
          }}
        >
          {recentTransaction.map((item, i) => (
            <div key={i} className={classes.t_item}>
              <div className={classes.t_item_info}>
                <button
                  className="icon_btn"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                    borderRadius: "10px",
                  }}
                >
                  {item.icon}
                </button>

                <div>
                  <p>{item.title}</p>

                  <h4>{item.desc}</h4>
                </div>
              </div>

              <p style={{ color: item.pcColor }}>{item.amount}</p>
            </div>
          ))}
        </div>

        <div className={classes.t_footer}>
          <button className="ecom_btn" style={{ background: color }}>
            Add
          </button>

          <p
            style={{
              color: mode === "dark" ? "#fff" : "lightgrey",
            }}
          >
            36 recent transactions
          </p>
        </div>
      </div>

      <div className={classes.sales}>
        <div className={classes.sales_header}>
          <p>Sales Overview</p>

          <DropDown mode={mode} data={dropDownData} />
        </div>

        <LineChart mode={mode} />
      </div>

      <div className={classes.flex_container}>
        <div className={classes.stats}>
          <div className={classes.stats_header}>
            <p>Weekly Stats</p>

            <button>
              <IoIosMore />
            </button>
          </div>

          <div className={classes.stats_list}>
            {weeklyStats.map((item, i) => (
              <div key={i} className={classes.stats_item}>
                <div className={classes.stats_info}>
                  <button
                    className="icon_btn"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                  >
                    {item.icon}
                  </button>

                  <div>
                    <p>{item.title}</p>

                    <h4>{item.desc}</h4>
                  </div>
                </div>

                <p style={{ color: item.pcColor }}>{item.amount}</p>
              </div>
            ))}
          </div>

          <div className={classes.stat_diagram}>
            <SparkLine
              id="area-sparkLine"
              currentColor={color}
              type="Area"
              height="160px"
              width="320"
              data={sparkLineAreaData}
              color="rgb(242, 252, 253)"
            />
          </div>
        </div>

        <div className={classes.branding}>
          <div className={classes.branding_header}>
            <p>Weekly Stats</p>

            <button>
              <IoIosMore />
            </button>
          </div>

          <div
            className={classes.highlight}
            style={{ background: "#ffa500", width: "100px" }}
          >
            16 APR, 2021
          </div>

          <div
            className={classes.branding_info}
            style={{
              borderColor: mode === "dark" ? "#262626" : "lightgrey",
            }}
          >
            {medicalproBranding.data.map((item, i) => (
              <div
                key={i}
                className={classes.b_item}
                style={{
                  borderColor: mode === "dark" ? "#262626" : "lightgrey",
                }}
              >
                <h4>{item.title}</h4>

                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div
            className={classes.teams}
            style={{
              borderColor: mode === "dark" ? "#262626" : "lightgrey",
            }}
          >
            <p>Teams</p>

            <div className={classes.team_list}>
              {medicalproBranding.teams.map((item, i) => (
                <div
                  key={item.name}
                  className={classes.highlight}
                  style={{ background: item.color }}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          <div
            className={classes.leaders}
            style={{
              borderColor: mode === "dark" ? "#262626" : "lightgrey",
            }}
          >
            <p>Leaders</p>

            <div className={classes.leaders_list}>
              {medicalproBranding.leaders.map((item, i) => (
                <img
                  key={i}
                  className={classes.leader_item}
                  src={item.image}
                  alt=""
                />
              ))}
            </div>
          </div>

          <div className={classes.branding_footer}>
            <button className="ecom_btn" style={{ background: color }}>
              Add
            </button>

            <p
              style={{
                color: mode === "dark" ? "#fff" : "lightgrey",
              }}
            >
              36 recent transactions
            </p>
          </div>
        </div>
      </div>

      <div className={classes.daily_activities}>
        <div className={classes.daily_header}>
          <p>Daily Activities</p>

          <button>
            <IoIosMore />
          </button>
        </div>

        <img src="/assets/product9.jpg" alt="" />

        <p className={classes.daily_title}>React 18 coming soon!</p>

        <p
          className={classes.daily_author}
          style={{
            color: mode === "dark" ? "#fff" : "lightgrey",
          }}
        >
          By Johnathan Doe
        </p>

        <p style={{ fontSize: "0.85rem" }}>
          This will be the small description for the news you have shown here.
          There could be some great info.
        </p>

        <button className="ecom_btn" style={{ background: color }}>
          Read More
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Transactions;
