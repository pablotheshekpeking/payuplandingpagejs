import React from "react";
import { Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

Error.propTypes = {
  children: PropTypes.any,
};

function Error({ children }) {
  return (
    <Text fontSize="1.4rem" mt={".5rem"} mb=".8rem" color="#b91c1c">
      {children}
    </Text>
  );
}

export default Error;
