import React from "react";
import Head from "next/head";
import Footer from "../components/page-layout/footer/Footer";
import PageHeader from "../components/page-header/PageHeader";
import { useSelector } from "react-redux";
import PieChart from "../components/page-layout/charts/Pie";
import { pieChartData } from "../data/dummy";

const pie = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <>
      <div
        className={`chart_container ${
          mode === "dark" ? "chart-bg-dark" : "chart-bg-light"
        }`}
      >
        <Head>
          <title>Pie</title>
        </Head>

        <PageHeader category="Chart" title="Pie" />

        <div>
          <p style={{ fontSize: "1.3rem", textAlign: "center" }}>
            Project Cost Breakdown
          </p>

          <PieChart
            id="chart-pie"
            mode={mode}
            data={pieChartData}
            height="full"
            legendVisiblity={true}
            width="100%"
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default pie;
