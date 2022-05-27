import React from "react";
import Head from "next/head";
import Footer from "../components/page-layout/footer/Footer";
import PageHeader from "../components/page-header/PageHeader";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

const colorPicker = () => {
  const change = (args) => {
    document.querySelector(".preview").style.backgroundColor =
      args.currentValue.hex;
  };

  const CustomColorPicker = ({ id, mode }) => (
    <ColorPickerComponent
      id={id}
      mode={mode}
      modeSwitcher={false}
      inline
      showButtons={false}
      change={change}
    />
  );
  return (
    <>
      <div className="page_container">
        <Head>
          <title>Color Picker</title>
        </Head>

        <PageHeader category="App" title="Color Picker" />

        <div className="color-preview-container">
          <div className="preview" />

          <div className="color-pickers">
            <div>
              <p>Inline Pallete</p>

              <CustomColorPicker id="inline-pallete" mode="Palette" />
            </div>

            <div>
              <p>Inline Picker</p>

              <CustomColorPicker id="inline-picker" mode="Picker" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default colorPicker;
