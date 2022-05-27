import React from "react";
import Head from "next/head";
import Footer from "../components/page-layout/footer/Footer";
import ChartHeader from "../components/chat-header/Chartheader";
import { useSelector } from "react-redux";
import LineChart from "../components/page-layout/charts/LineChart";

const Line = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <>
      <div
        className={`chart_container ${
          mode === "dark" ? "chart-bg-dark" : "chart-bg-light"
        }`}
      >
        <Head>
          <title>Line</title>
        </Head>

        <ChartHeader category="Chart" title="Line" />

        <div>
          <p style={{ fontSize: "1.3rem", textAlign: "center" }}>
            Revenue Breakdown
          </p>

          <LineChart mode={mode} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Line;
