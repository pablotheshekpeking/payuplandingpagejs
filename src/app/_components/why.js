"use client";

import React from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function Why() {
  return (
    <Box
      w={"full"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      px={["24px", "24px", "100px", "100px"]}
      my="20rem"
    >
      <Box
        w={"full"}
        maxW={"full"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src={"/whyimg.png"} width={1279.68} />
      </Box>
    </Box>
  );
}
