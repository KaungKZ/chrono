import React from "react";
import "../styles/styles.scss";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Layout from "../components/helpers/Layout";

// this is testing

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.objectOf(Object).isRequired,
};

export default MyApp;
