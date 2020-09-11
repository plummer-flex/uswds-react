import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Loading = ({ isLoading, message, children }) => {
  if (isLoading) {
    return (
      <h1>
        <FontAwesomeIcon icon="spinner" spin /> {message}
      </h1>
    );
  }
  return children;
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
  message: PropTypes.node,
  children: PropTypes.node,
};

export default Loading;
