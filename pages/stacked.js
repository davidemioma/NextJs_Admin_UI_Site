import React from "react";
import Head from "next/head";
import Footer from "../components/page-layout/footer/Footer";
import ChartHeader from "../components/chat-header/Chartheader";
import { useSelector } from "react-redux";
import Stacked from "../components/page-layout/charts/Stacked";

const StackedPage = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <>
      <div
        className={`chart_container ${
          mode === "dark" ? "chart-bg-dark" : "chart-bg-light"
        }`}
      >
        <Head>
          <title>Stacked</title>
        </Head>

        <ChartHeader category="Chart" title="Stacked" />

        <div>
          <p style={{ fontSize: "1.3rem", textAlign: "center" }}>
            Inflation Rate
          </p>

          <Stacked id="Stacked-chart" width="full" height="360px" mode={mode} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default StackedPage;
