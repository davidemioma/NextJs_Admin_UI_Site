import React from "react";
import Head from "next/head";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import PageHeader from "../components/page-header/PageHeader";
import Footer from "../components/page-layout/footer/Footer";

const employees = () => {
  return (
    <>
      <div className="page_container">
        <Head>
          <title>Employees</title>
        </Head>

        <PageHeader category="Page" title="Employees" />

        <GridComponent
          dataSource={employeesData}
          style={{ color: "black" }}
          width="auto"
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 5 }}
          editSettings={{ allowDeleting: true, allowEditing: true }}
          toolbar={["Search"]}
        >
          <Inject services={[Search, Page, Toolbar]} />

          <ColumnsDirective>
            {employeesGrid.map((item, i) => (
              <ColumnDirective key={i} {...item} />
            ))}
          </ColumnsDirective>
        </GridComponent>
      </div>

      <Footer />
    </>
  );
};

export default employees;
