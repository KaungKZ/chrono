import React from "react";
import PropTypes from "prop-types";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
