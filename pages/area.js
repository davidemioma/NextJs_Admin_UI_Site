import React from "react";
import Head from "next/head";
import Footer from "../components/page-layout/footer/Footer";
import PageHeader from "../components/page-header/PageHeader";
import { useSelector } from "react-redux";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../data/dummy";

const area = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <>
      <div
        className={`chart_container ${
          mode === "dark" ? "chart-bg-dark" : "chart-bg-light"
        }`}
      >
        <Head>
          <title>Area</title>
        </Head>

        <PageHeader category="Chart" title="Area" />

        <div>
          <p style={{ fontSize: "1.3rem", textAlign: "center" }}>
            Inflation Rate in percentage
          </p>

          <ChartComponent
            id="area"
            primaryXAxis={areaPrimaryXAxis}
            primaryYAxis={areaPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            background={mode === "dark" ? "#33373E" : "#fff"}
            legendSettings={{ background: "white" }}
          >
            <Inject services={[SplineAreaSeries, DateTime, Legend]} />

            <SeriesCollectionDirective>
              {areaCustomSeries.map((item, i) => (
                <SeriesDirective key={i} {...item} />
              ))}
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default area;
