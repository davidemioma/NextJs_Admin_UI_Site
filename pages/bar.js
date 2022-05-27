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
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../data/dummy";

const Bar = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <>
      <div
        className={`chart_container ${
          mode === "dark" ? "chart-bg-dark" : "chart-bg-light"
        }`}
      >
        <Head>
          <title>Bar</title>
        </Head>

        <PageHeader category="Chart" title="Bar" />

        <div>
          <p style={{ fontSize: "1.3rem", textAlign: "center" }}>
            Olympic Medal Counts - RIO
          </p>

          <ChartComponent
            id="bar"
            primaryXAxis={barPrimaryXAxis}
            primaryYAxis={barPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            background={mode === "dark" ? "#33373E" : "#fff"}
            legendSettings={{ background: "white" }}
          >
            <Inject
              services={[Tooltip, Category, Legend, ColumnSeries, DataLabel]}
            />

            <SeriesCollectionDirective>
              {barCustomSeries.map((item, i) => (
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

export default Bar;
