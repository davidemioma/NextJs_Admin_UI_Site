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
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from "@syncfusion/ej2-react-charts";
import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../data/dummy";

const financial = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <>
      <div
        className={`chart_container ${
          mode === "dark" ? "chart-bg-dark" : "chart-bg-light"
        }`}
      >
        <Head>
          <title>Financial</title>
        </Head>

        <PageHeader category="Chart" title="Financial" />

        <div>
          <p style={{ fontSize: "1.3rem", textAlign: "center" }}>
            AAPLE Historical
          </p>

          <ChartComponent
            id="financial-chart"
            primaryXAxis={FinancialPrimaryXAxis}
            primaryYAxis={FinancialPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            background={mode === "dark" ? "#33373E" : "#fff"}
            tooltip={{ enable: true }}
            crosshair={{
              enable: true,
              lineType: "Vertical",
              line: { width: 0 },
            }}
          >
            <Inject
              services={[
                HiloSeries,
                DateTime,
                Tooltip,
                Zoom,
                Logarithmic,
                Crosshair,
              ]}
            />

            <SeriesCollectionDirective>
              <SeriesDirective
                dataSource={financialChartData}
                xName="x"
                yName="low"
                name="Apple Inc"
                type="Hilo"
                low="low"
                high="high"
              />
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default financial;
