import React from "react";
import Head from "next/head";
import Footer from "../components/page-layout/footer/Footer";
import PageHeader from "../components/page-header/PageHeader";
import { useSelector } from "react-redux";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";
import { PyramidData } from "../data/dummy";

const Pyramid = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <>
      <div
        className={`chart_container ${
          mode === "dark" ? "chart-bg-dark" : "chart-bg-light"
        }`}
      >
        <Head>
          <title>Pyramid</title>
        </Head>

        <PageHeader category="Chart" title="Pyramid" />

        <div>
          <p style={{ fontSize: "1.3rem", textAlign: "center" }}>
            Food Comparison Chart
          </p>

          <AccumulationChartComponent
            id="pyramid-chart"
            background={mode === "dark" ? "#33373E" : "#fff"}
            tooltip={{ enable: true }}
            legendSettings={{ mode: "Range", background: "white" }}
          >
            <Inject
              services={[
                AccumulationDataLabel,
                AccumulationTooltip,
                PyramidSeries,
                AccumulationLegend,
                AccumulationSelection,
              ]}
            />

            <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective
                name="Food"
                dataSource={PyramidData}
                xName="x"
                yName="y"
                type="Pyramid"
                width="45%"
                height="80%"
                neckWidth="15%"
                gapRatio={0.03}
                explode
                emptyPointSettings={{ mode: "Drop", fill: "red" }}
                dataLabel={{
                  visible: true,
                  position: "Inside",
                  name: "text",
                }}
              />
            </AccumulationSeriesCollectionDirective>
          </AccumulationChartComponent>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Pyramid;
