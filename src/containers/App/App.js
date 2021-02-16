import React from "react";
import { PropTypes } from "prop-types";
import { Toaster } from "react-hot-toast";

function AppContainer({ children }) {
  return (
    <>
      <Toaster position="top-right"/>
      {children}
    </>
  );
}

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
