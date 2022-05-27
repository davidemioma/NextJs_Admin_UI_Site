import React from "react";
import Head from "next/head";
import Footer from "../components/page-layout/footer/Footer";
import ChartHeader from "../components/chat-header/Chartheader";
import { useSelector } from "react-redux";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from "@syncfusion/ej2-react-charts";
import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  rangeColorMapping,
} from "../data/dummy";

const ColorMapping = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <>
      <div
        className={`chart_container ${
          mode === "dark" ? "chart-bg-dark" : "chart-bg-light"
        }`}
      >
        <Head>
          <title>Color Mapping</title>
        </Head>

        <ChartHeader category="Chart" title="Color Mapping" />

        <div>
          <p style={{ fontSize: "1.3rem", textAlign: "center" }}>
            USA CLIMATE - WEATHER BY MONTH
          </p>

          <ChartComponent
            id="area"
            primaryXAxis={ColorMappingPrimaryXAxis}
            primaryYAxis={ColorMappingPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            background={mode === "dark" ? "#33373E" : "#fff"}
            tooltip={{ enable: true }}
            legendSettings={{ mode: "Range", background: "white" }}
          >
            <Inject services={[ColumnSeries, Category, Tooltip, Legend]} />

            <SeriesCollectionDirective>
              <SeriesDirective
                dataSource={colorMappingData[0]}
                name="USA"
                xName="x"
                yName="y"
                type="Column"
                cornerRadius={{
                  topLeft: 10,
                  topRight: 10,
                }}
              />
            </SeriesCollectionDirective>

            <RangeColorSettingsDirective>
              {rangeColorMapping.map((item, i) => (
                <RangeColorSettingDirective key={i} {...item} />
              ))}
            </RangeColorSettingsDirective>
          </ChartComponent>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ColorMapping;
