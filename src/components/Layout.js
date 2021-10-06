import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

const Layout = props => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
