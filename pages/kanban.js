import React from "react";
import Head from "next/head";
import Footer from "../components/page-layout/footer/Footer";
import PageHeader from "../components/page-header/PageHeader";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { kanbanData, kanbanGrid } from "../data/dummy";

const kanban = () => {
  return (
    <>
      <div className="page_container">
        <Head>
          <title>Kanban</title>
        </Head>

        <PageHeader category="App" title="Kanban" />

        <KanbanComponent
          id="kanban"
          keyField="Status"
          dataSource={kanbanData}
          cardSettings={{ contentField: "Summary", headerField: "Id" }}
        >
          <ColumnsDirective>
            {kanbanGrid.map((item, i) => (
              <ColumnDirective key={i} {...item} />
            ))}
          </ColumnsDirective>
        </KanbanComponent>
      </div>

      <Footer />
    </>
  );
};

export default kanban;
