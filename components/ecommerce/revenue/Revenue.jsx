import React from "react";
import { useSelector } from "react-redux";
import { GoPrimitiveDot } from "react-icons/go";
import SparkLine from "../../page-layout/charts/SparkLine";
import Stacked from "../../page-layout/charts/Stacked";
import Pie from "../../page-layout/charts/Pie";
import classes from "./Revenue.module.css";

const Revenue = ({ chartData, pieChartData }) => {
  const mode = useSelector((state) => state.theme.mode);

  const color = useSelector((state) => state.theme.color);

  if (typeof window === "undefined") {
    return;
  }

  return (
    <div className={mode === "dark" ? classes.dark : classes.light}>
      <div className={classes.updates}>
        <div className={classes.title}>
          <p>Revenue Updates</p>

          <div className={classes.title_name}>
            <GoPrimitiveDot />
            <span>Expense</span>
          </div>

          <div className={classes.title_name}>
            <GoPrimitiveDot color="#4dff4d" />
            <span style={{ color: "#4dff4d" }}>Budget</span>
          </div>
        </div>

        <div className={classes.contents}>
          <div className={classes.details_container}>
            <div
              className={classes.details}
              style={{
                borderColor: mode === "dark" ? "#262626" : "lightgray",
              }}
            >
              <div className={classes.details_budget}>
                <span>
                  <p>$93,438</p>
                  <h4>Budget</h4>
                </span>

                <div className={classes.budget_amount}>23%</div>
              </div>

              <div className={classes.details_expense}>
                <span>
                  <p>$93,438</p>
                  <h4>Expense</h4>
                </span>
              </div>

              <div className={classes.sparkLine}>
                <SparkLine
                  id="sparkLine"
                  height="80px"
                  width="230px"
                  color={color}
                  currentColor={color}
                  data={chartData}
                  type="Line"
                />
              </div>

              <button className="ecom_btn" style={{ background: color }}>
                Download Report
              </button>
            </div>
          </div>

          <div className={classes.stacked}>
            <Stacked id="chart" width="320px" height="360px" mode={mode} />
          </div>
        </div>
      </div>

      <div className={classes.contents_earnings}>
        <div className={classes.earnings} style={{ background: color }}>
          <div className={classes.earnings_header}>
            <p>Earnings</p>

            <div className={classes.price}>
              <p>$63,448.78</p>

              <h4
                style={{
                  color: mode === "dark" ? "lightgrey" : "black",
                }}
              >
                Monthly Revenue
              </h4>
            </div>
          </div>

          <div>
            <SparkLine
              id="column-sparkline"
              height="100px"
              type="Column"
              data={chartData}
              color="rgb(242, 252, 253)"
              currentColor={color}
              width="320px"
            />
          </div>
        </div>

        <div className={classes.yearly_sale}>
          <div className={classes.sale_info}>
            <p>$43,246</p>

            <h4>Yearly Sales</h4>
          </div>

          <div>
            <Pie
              id="pie-chart"
              mode={mode}
              data={pieChartData}
              height="160px"
              width="160px"
              legendVisiblity={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
