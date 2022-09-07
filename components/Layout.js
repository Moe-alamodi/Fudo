import Header from "./Header/Header";
import React from "react";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
