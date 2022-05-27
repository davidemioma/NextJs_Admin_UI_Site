import React from "react";
import Head from "next/head";
import Footer from "../components/page-layout/footer/Footer";
import PageHeader from "../components/page-header/PageHeader";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

const editor = () => {
  return (
    <>
      <div className="page_container">
        <Head>
          <title>Editor</title>
        </Head>

        <PageHeader category="App" title="Editor" />

        <RichTextEditorComponent>
          <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
        </RichTextEditorComponent>
      </div>

      <Footer />
    </>
  );
};

export default editor;
