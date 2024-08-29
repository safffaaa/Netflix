import React from "react";
import Head from "../components/Head";

function FullLayout({children}) {
  return (
    <React.Fragment>
      <Head />
      {children}
    </React.Fragment>
  );
}

export default FullLayout;
