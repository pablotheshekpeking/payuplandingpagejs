import React from "react";
import { Box, Spinner } from "@chakra-ui/react";
function SpinnerFull() {
  return (
    <Box
      display={"flex"}
      height="100vh"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Spinner width={"10rem"} height={"10rem"} />
    </Box>
  );
}

export default SpinnerFull;
