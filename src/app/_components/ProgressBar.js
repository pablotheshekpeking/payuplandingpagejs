import React from "react";
import Link from "next/link";
import { Box, Progress, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import PropTypes from "prop-types";

ProgressBar.propTypes = {
  handleBack: PropTypes.func,
  currentStep: PropTypes.number,
  steps: PropTypes.number,
};
function ProgressBar({ handleBack, currentStep, steps }) {
  return (
    <Box
      fontSize={"1.6rem"}
      display={["none", "none", "flex", "flex"]}
      justifyContent={"space-between"}
      alignItems={"center"}
      mb={"8rem"}
    >
      <Box display={"flex"} gap={"2.4rem"} w={"50%"} alignItems={"start"}>
        <ArrowBackIcon
          boxSize={"4rem"}
          border={"2px solid black"}
          borderRadius={"12px"}
          p={".5rem"}
          onClick={handleBack}
          cursor={"pointer"}
        />
        <Box w={"100%"} display={"flex"} flexDirection={"column"} gap={"8px"}>
          <Text fontWeight={500} fontSize={"3rem"} mt={"-5px"}>
            {currentStep}/{steps}{" "}
            <span style={{ fontSize: "16px" }}>steps</span>
          </Text>
          <Progress
            value={(currentStep / steps) * 100}
            colorScheme="green"
            bg="#7C7C7C7D"
            size="sm"
            w={"200px"}
          />
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"right"} h={"8rem"}>
        <Box
          px={"1.5rem"}
          bg={"black"}
          display={"flex"}
          gap={"1.6rem"}
          alignItems={"center"}
          borderRadius={"2rem"}
        >
          <Text color={"white"}>Have an account?</Text>

          <Box
            bg={"white"}
            h={"4.5rem"}
            fontWeight={"bold"}
            width={"15rem"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"2rem"}
            cursor={"pointer"}
          >
            <Link href={"./login"}>Log in</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProgressBar;
