"use client";
import React from "react";
import { Box, Text, Stack, Button, CloseButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const targetElement = document.querySelector(sectionId);
    if (targetElement) {
      setOpen(false);
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Effect to handle body overflow
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <Box
        zIndex={999}
        width={"97%"}
        h={"auto"}
        ml={"1rem"}
        mt="2.4rem"
        bg={"rgba(255, 255, 255, 0.6)"}
        boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
        backdropFilter={"blur(5px)"}
        borderRadius={"20px"}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={"8px"}
        position="fixed"
        fontFamily={"Roobert Pro"}
      >
        {/*** payup logo */}
        <Link href={"/#top"} passHref onClick={(e) => handleScroll(e, "#top")}>
          <Box w={["100px", "100px", "176px", "176px"]} h={"auto"}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 176 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.90639 47.1097L7.65621 42.5677L32.9835 25.8168L32.6352 26.4071L32.2386 27.0795L32.8616 27.55L38.3914 31.7257L38.8487 32.0709L25.4962 35.4382L25.1671 35.5212L24.9803 35.804L24.9803 35.804L24.9802 35.8041L24.98 35.8044L24.9794 35.8053L24.9744 35.8128L24.9515 35.8467C24.9305 35.8776 24.8982 35.9247 24.8549 35.9864C24.7682 36.11 24.6377 36.292 24.4664 36.5201C24.1234 36.9767 23.618 37.6162 22.9736 38.3397C21.6796 39.7926 19.8502 41.5563 17.6745 42.8683C14.329 44.8858 11.0283 45.9887 8.56191 46.5864C7.49658 46.8446 6.58984 47.0078 5.90639 47.1097ZM42.2234 31.2199L39.5464 31.895L39.7465 31.3109L45.4028 14.7998L45.9045 13.3353L44.391 13.6608L22.9034 18.2826L21.0481 18.6817L22.5564 19.8335L27.1635 23.3517L11.1226 33.7779L18.3248 15.4376L49.706 9.01669L42.2234 31.2199Z"
                fill="#FFF239"
                stroke="black"
                stroke-width="1.75"
              />
              <path
                d="M68.4617 17.5186C69.5886 17.5186 70.6824 17.7074 71.743 18.0852C72.8257 18.463 73.798 19.0186 74.6597 19.7519C75.5215 20.4852 76.2065 21.3741 76.7147 22.4186C77.245 23.463 77.5101 24.6408 77.5101 25.9519C77.5101 27.663 77.1124 29.1408 76.3169 30.3852C75.5215 31.6074 74.4829 32.5408 73.2014 33.1852C71.9198 33.8297 70.5608 34.1519 69.1246 34.1519C68.2849 34.1519 67.5336 34.0741 66.8708 33.9186C66.2079 33.7408 65.6334 33.5186 65.1472 33.2519V39.8519H58.9492V17.5186H68.4617ZM65.1472 23.3519V29.6119C65.1472 28.9852 65.9206 28.763 66.3404 28.8519C66.7824 28.9408 67.2464 28.9852 67.7325 28.9852C68.7048 28.9852 69.5113 28.6852 70.1521 28.0852C70.815 27.463 71.1464 26.7519 71.1464 25.9519C71.1464 25.0408 70.815 24.3852 70.1521 23.9852C69.5113 23.563 68.7048 23.3519 67.7325 23.3519H65.1472Z"
                fill="#242424"
              />
              <path
                d="M85.2514 22.3519C86.1352 22.3519 86.997 22.5519 87.8366 22.9519C88.6984 23.3297 89.4055 23.8186 89.9579 24.4186V22.8519H95.6587V39.8519H89.9579V37.0186C89.5381 37.9519 88.8973 38.7408 88.0355 39.3852C87.1738 40.0297 86.1352 40.3519 84.9199 40.3519C83.6604 40.3519 82.4783 40.0297 81.3735 39.3852C80.2687 38.7408 79.3627 37.7519 78.6556 36.4186C77.9706 35.063 77.6281 33.363 77.6281 31.3186C77.6281 29.4074 77.9706 27.7852 78.6556 26.4519C79.3627 25.1186 80.2907 24.1074 81.4398 23.4186C82.6109 22.7074 83.8814 22.3519 85.2514 22.3519ZM86.4446 27.9519C85.627 27.9519 84.942 28.2852 84.3896 28.9519C83.8593 29.6186 83.5941 30.4074 83.5941 31.3186C83.5941 32.2297 83.8704 32.9963 84.4228 33.6186C84.9752 34.2408 85.7043 34.5519 86.6103 34.5519C87.0964 34.5519 87.5936 34.4297 88.1018 34.1852C88.3543 34.0527 88.5601 33.8078 88.7466 33.5322C89.0928 33.0206 89.1023 32.3438 88.8874 31.7646C88.5203 30.775 88.1797 29.3391 89.2826 29.3149L89.9579 29.3519C89.4718 28.9519 88.9194 28.6186 88.3007 28.3519C87.7041 28.0852 87.0854 27.9519 86.4446 27.9519Z"
                fill="#242424"
              />
              <path
                d="M102.671 22.8519L106.416 31.8852L109.505 27.6297L116.117 26.1986L104.262 47.8519H97.898L103.234 38.3852L96.1082 22.8519H102.671Z"
                fill="#242424"
              />
              <path
                d="M132.851 22.8519V33.0519C132.851 34.5852 132.497 35.8963 131.79 36.9852C131.105 38.0741 130.155 38.9074 128.94 39.4852C127.725 40.063 126.332 40.3519 124.764 40.3519C123.195 40.3519 121.803 40.063 120.587 39.4852C119.372 38.9074 118.411 38.0741 117.704 36.9852C117.019 35.8963 116.676 34.5852 116.676 33.0519L116.401 26.1986L122.144 27.6297L122.41 31.5186C122.41 32.6741 122.587 33.5186 122.941 34.0519C123.316 34.5852 123.924 34.8519 124.764 34.8519C125.603 34.8519 126.2 34.5852 126.553 34.0519C126.929 33.5186 127.117 32.6741 127.117 31.5186L127.15 22.8519H132.851Z"
                fill="#242424"
              />
              <path
                d="M146.028 22.3519C147.287 22.3519 148.469 22.6741 149.574 23.3186C150.701 23.963 151.607 24.9519 152.292 26.2852C152.977 27.6186 153.32 29.3186 153.32 31.3852C153.32 33.2963 152.966 34.9186 152.259 36.2519C151.574 37.5852 150.646 38.6074 149.475 39.3186C148.326 40.0074 147.066 40.3519 145.696 40.3519C144.812 40.3519 143.94 40.163 143.078 39.7852C142.238 39.3852 141.542 38.8852 140.99 38.2852V47.8519H135.289V22.8519H140.99V25.6852C141.41 24.7519 142.05 23.963 142.912 23.3186C143.774 22.6741 144.812 22.3519 146.028 22.3519ZM144.337 28.1519C143.873 28.1519 143.376 28.2852 142.846 28.5519C142.338 28.7963 141.896 29.1852 141.52 29.7186C141.167 30.2297 140.99 30.8963 140.99 31.7186L141.148 35.5852C141.148 35.5852 141.523 33.5278 142.647 34.3519C143.266 34.6186 143.884 34.7519 144.503 34.7519C145.343 34.7519 146.028 34.4186 146.558 33.7519C147.088 33.063 147.354 32.2741 147.354 31.3852C147.354 30.4741 147.077 29.7074 146.525 29.0852C145.973 28.463 145.243 28.1519 144.337 28.1519Z"
                fill="#242424"
              />
            </svg>
          </Box>
        </Link>
        <Box
          display={["none", "none", "flex", "flex"]}
          alignItems={"center"}
          w={"full"}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={"50px"}
            justifyContent={"center"}
            w={"full"}
          >
            <Link
              href={"#about"}
              passHref
              onClick={(e) => handleScroll(e, "#about")}
            >
              <Text>About</Text>
            </Link>
            <Link
              href={"#faq"}
              passHref
              onClick={(e) => handleScroll(e, "#faq")}
            >
              <Text>FAQ</Text>
            </Link>
            <Link
              href={"#contact"}
              passHref
              onClick={(e) => handleScroll(e, "#contact")}
            >
              <Text>Contact</Text>
            </Link>
          </Box>

          <Stack direction="row" spacing={4} align="center">
            <Link href={"../auth/signup"}>
              <Button
                fontSize="1.6rem"
                p={"2rem"}
                bg={"#FFF239"}
                border={"1px solid black"}
              >
                Sign up
              </Button>
            </Link>
            <Link href={"../auth/login"}>
              <Button
                fontSize="1.6rem"
                p={"2rem"}
                color={"#FFF239"}
                bg={"black"}
              >
                Sign in
              </Button>
            </Link>
          </Stack>
        </Box>
        <HamburgerIcon
          display={["block", "block", "none", "none"]}
          w={"3rem"}
          marginLeft={"auto"}
          h={"3rem"}
          cursor="pointer"
          onClick={() => {
            setOpen(true);
          }}
        />

        {/*Mobile Nav*/}

        {/*** mobile navbar */}
        {/* <Box display={["flex", "flex", "none", "none"]}>
        <Popover>
          <PopoverTrigger>
            
          </PopoverTrigger>
          <PopoverContent position={"absolute"}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <Box flexDirection={"column"} gap={"8px"}>
                <Link
                  href={"#about"}
                  passHref
                  onClick={(e) => handleScroll(e, "#about")}
                >
                  <Text>About</Text>
                </Link>
                <Link
                  href={"#faq"}
                  passHref
                  onClick={(e) => handleScroll(e, "#faq")}
                >
                  <Text>FAQ</Text>
                </Link>
                <Link
                  href={"#contact"}
                  passHref
                  onClick={(e) => handleScroll(e, "#contact")}
                >
                  <Text>Contact</Text>
                </Link>
              </Box>

              <Stack direction="row" spacing={4} align="center" pt={"8px"}>
                <Link href={"../auth/signup"}>
                  <Button bg={"#FFF239"} border={"1px solid black"}>
                    Sign up
                  </Button>
                </Link>
                <Link href={"../auth/login"}>
                  <Button color={"#FFF239"} bg={"black"}>
                    Sign in
                  </Button>
                </Link>
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box> */}
      </Box>
      {isOpen && (
        <Box
          h={"100vh"}
          zIndex={9999}
          width="100vw"
          bg="rgba(255, 255, 255, 0.9)"
          backdropFilter={"blur(5px)"}
          textAlign="center"
          display={"flex"}
          flexDirection="column"
          position="fixed"
          top={0}
          left={0}
          py="4rem"
          mt={0}
          transition="transform .3s ease"
          transform={isOpen ? "translateX(0)" : "translateX(100%)"}
          alignItems={"center"}
          w={"full"}
        >
          <CloseButton
            position="absolute"
            top="30px"
            right="30px"
            onClick={() => setOpen(false)}
            fontSize="2rem"
            color="black"
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"2rem"}
            justifyContent={"center"}
            w={"full"}
          >
            <Link
              href={"#about"}
              passHref
              onClick={(e) => handleScroll(e, "#about")}
            >
              <Text fontSize="3rem">About</Text>
            </Link>
            <Link
              href={"#faq"}
              passHref
              onClick={(e) => handleScroll(e, "#faq")}
            >
              <Text fontSize="3rem">FAQ</Text>
            </Link>
            <Link
              href={"#contact"}
              passHref
              onClick={(e) => handleScroll(e, "#contact")}
            >
              <Text fontSize="3rem">Contact</Text>
            </Link>
          </Box>

          <Box display="flex" flexDirection="column" gap="2rem" mt="4rem">
            <Link href={"../auth/signup"}>
              <Button
                fontSize="1.6rem"
                py={"3rem"}
                px={"8rem"}
                bg={"#FFF239"}
                borderRadius="10px"
                border={"1px solid black"}
              >
                Sign up
              </Button>
            </Link>
            <Link href={"../auth/login"}>
              <Button
                _hover={"backgroundColor: black"}
                py={"3rem"}
                px={"8rem"}
                borderRadius="10px"
                fontSize="1.6rem"
                color={"#FFF239"}
                bg={"black"}
              >
                Sign in
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </>
  );
}
