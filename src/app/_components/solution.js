"use client";
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Solution() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="full"
      h="100vh"
      px="24px"
    >
      <Box
        w="full"
        h="100%"
        display="flex"
        flexDirection={["column", "column", "column", "row"]}
        justifyContent="center"
        alignItems={["flex-start", "flex-start", "center", "center"]}
        gap={["50px", "50px", "144px", "144px"]}
      >
        <Text
          w={["100%", "100%", "100%", "420px"]}
          h="auto"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          fontWeight={400}
          fontSize="2rem"
          fontFamily={"Roobert Pro"}
        >
          <span style={{ fontSize: "3rem", fontFamily: "Roobert Pro" }}>
            Creating a{" "}
            <span style={{ fontWeight: 700 }}>financial solution</span> for our
            currency to thrive.
          </span>{" "}
          With our peer-to-peer system, footing bills and invoices have been
          made easier. All you need to do is fund your Payup account with NGN.
        </Text>

        <Box w="auto" h="42rem" maxW="100%">
          <Image
            src={"/solution.png"}
            width={610}
            height={403}
            alt="Solution"
          />
        </Box>
      </Box>
    </Box>
  );
}
