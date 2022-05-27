import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Page,
  Sort,
  Filter,
  Edit,
  ExcelExport,
  PdfExport,
  ContextMenu,
  Resize,
} from "@syncfusion/ej2-react-grids";
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import PageHeader from "../components/page-header/PageHeader";
import Footer from "../components/page-layout/footer/Footer";
import Head from "next/head";

const orders = () => {
  return (
    <>
      <div className="page_container">
        <Head>
          <title>Orders</title>
        </Head>

        <PageHeader category="Page" title="Orders" />

        <GridComponent
          id="gridcomp"
          dataSource={ordersData}
          allowPaging
          allowSorting
          allowExcelExport
          allowPdfExport
          contextMenuItems={contextMenuItems}
          editSettings={{ allowDeleting: true, allowEditing: true }}
        >
          <ColumnsDirective>
            {ordersGrid.map((item, i) => (
              <ColumnDirective key={i} {...item} />
            ))}
          </ColumnsDirective>

          <Inject
            services={[
              Page,
              Sort,
              Filter,
              Edit,
              ExcelExport,
              PdfExport,
              ContextMenu,
              Resize,
            ]}
          />
        </GridComponent>
      </div>

      <Footer />
    </>
  );
};

export default orders;
