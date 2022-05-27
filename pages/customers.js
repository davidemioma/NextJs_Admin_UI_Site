import React from "react";
import Head from "next/head";
import PageHeader from "../components/page-header/PageHeader";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import Footer from "../components/page-layout/footer/Footer";

const customers = () => {
  return (
    <>
      <div className="page_container">
        <Head>
          <title>Customers</title>
        </Head>

        <PageHeader category="Page" title="Customers" />

        <GridComponent
          dataSource={customersData}
          enableHover={false}
          allowPaging
          allowSorting
          pageSettings={{ pageCount: 5 }}
          selectionSettings={{ persistSelection: true }}
          toolbar={["Delete"]}
          editSettings={{ allowDeleting: true, allowEditing: true }}
        >
          <ColumnsDirective>
            {customersGrid.map((item, i) => (
              <ColumnDirective key={i} {...item} />
            ))}
          </ColumnsDirective>

          <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
        </GridComponent>
      </div>

      <Footer />
    </>
  );
};

export default customers;
