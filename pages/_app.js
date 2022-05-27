import "../styles/globals.css";
import store from "../store/store";
import Layout from "../components/page-layout/layout/Layout";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
