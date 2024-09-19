import React from "react";
import { Image } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

AccountType.propTypes = {
  handleNextStep: PropTypes.func,
};

function AccountType({ handleNextStep }) {
  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
      <Text fontWeight={600} fontSize={"2.4rem"} pb={"1.6rem"}>
        How will you use Pay Up?
      </Text>
      <Text fontSize={"1.8rem"}>Please select an option below</Text>
      <Box display={"flex"} borderRadius={"8px"} mt={"3.2rem"}>
        <Box
          bg={"black"}
          px={"5.9rem"}
          py={".8rem"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"8px"}
          zIndex={"8"}
        >
          <Text color={"white"} textAlign={"center"}>
            Personal
          </Text>
        </Box>
        <Box
          px={"5.9rem"}
          py={"8px"}
          bg={"white"}
          h={"4rem"}
          ml={"-5px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRightRadius={"8px"}
          border={"1px solid #11131761"}
        >
          <Text>Merchant</Text>
        </Box>
      </Box>

      <Box
        w={"100%"}
        bg={"#FFF239"}
        mt={"32px"}
        display={"flex"}
        borderRadius={"20px"}
        border={"1px solid black"}
      >
        <Box
          w={"60%"}
          py={"32px"}
          pl={"32px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"16px"}
        >
          <Text fontWeight={500} fontSize={"20px"}>
            Sign up for personal use to
          </Text>
          <Box display={"flex"} gap={"8px"} alignItems={"center"}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="9" r="9" fill="#399500" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.5227 5.97725C13.7424 6.19692 13.7424 6.55308 13.5227 6.77275L8.27275 12.0227C8.05308 12.2424 7.69692 12.2424 7.47725 12.0227L4.47725 9.02275C4.25758 8.80308 4.25758 8.44692 4.47725 8.22725C4.69692 8.00758 5.05308 8.00758 5.27275 8.22725L7.875 10.8295L12.7273 5.97725C12.9469 5.75758 13.3031 5.75758 13.5227 5.97725Z"
                fill="white"
              />
            </svg>
            <Text fontSize={["16px"]} textAlign={"left"}>
              Foot all international bills
            </Text>
          </Box>
          <Box display={"flex"} gap={"8px"} alignItems={"center"}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="9" r="9" fill="#399500" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.5227 5.97725C13.7424 6.19692 13.7424 6.55308 13.5227 6.77275L8.27275 12.0227C8.05308 12.2424 7.69692 12.2424 7.47725 12.0227L4.47725 9.02275C4.25758 8.80308 4.25758 8.44692 4.47725 8.22725C4.69692 8.00758 5.05308 8.00758 5.27275 8.22725L7.875 10.8295L12.7273 5.97725C12.9469 5.75758 13.3031 5.75758 13.5227 5.97725Z"
                fill="white"
              />
            </svg>
            <Text fontSize={["1.6rem"]} textAlign={"left"}>
              Enjoy contactless payments
            </Text>
          </Box>
          <Box display={"flex"} gap={"8px"} alignItems={"center"}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="9" r="9" fill="#399500" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.5227 5.97725C13.7424 6.19692 13.7424 6.55308 13.5227 6.77275L8.27275 12.0227C8.05308 12.2424 7.69692 12.2424 7.47725 12.0227L4.47725 9.02275C4.25758 8.80308 4.25758 8.44692 4.47725 8.22725C4.69692 8.00758 5.05308 8.00758 5.27275 8.22725L7.875 10.8295L12.7273 5.97725C12.9469 5.75758 13.3031 5.75758 13.5227 5.97725Z"
                fill="white"
              />
            </svg>
            <Text fontSize={["1.6rem"]} textAlign={"left"}>
              Save in equivalents
            </Text>
          </Box>
        </Box>
        <Box
          w={"40%"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          borderTopRightRadius={"20px"}
          borderBottomRightRadius={"20px"}
        >
          <Image
            w={"full"}
            h={"full"}
            src={"/spiral.png"}
            alt={"Personal Use"}
          />
        </Box>
      </Box>

      <Box
        bg={"black"}
        maxW={"100%"}
        borderRadius={"20px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        p={"18px"}
        mt={"32px"}
        cursor={"pointer"}
        onClick={handleNextStep}
      >
        <Text color={"#F7F564"}>Get started</Text>
      </Box>
    </Box>
  );
}

export default AccountType;
