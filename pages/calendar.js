import React from "react";
import Head from "next/head";
import PageHeader from "../components/page-header/PageHeader";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { scheduleData } from "../data/dummy";
import Footer from "../components/page-layout/footer/Footer";

const calendar = () => {
  return (
    <>
      <div className="page_container">
        <Head>
          <title>Calendar</title>
        </Head>

        <PageHeader category="App" title="Calendar" />

        <ScheduleComponent
          height="650px"
          eventSettings={{ dataSource: scheduleData }}
          selectedDate={new Date(2021, 0, 10)}
        >
          <ViewsDirective>
            {["Day", "Week", "WorkWeek", "Month", "Agenda"].map((item, i) => (
              <ViewDirective key={i} option={item} />
            ))}
          </ViewsDirective>

          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
          />
        </ScheduleComponent>
      </div>

      <Footer />
    </>
  );
};

export default calendar;
