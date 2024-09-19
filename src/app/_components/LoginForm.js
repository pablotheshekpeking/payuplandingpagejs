import React from "react";
import { Box, Spinner, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import CustomInput from "./custominput";
import { login } from "../_lib/data-service";

LoginForm.propTypes = {
  setStep: PropTypes.func,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func,
  handleInput: PropTypes.func,
  password: PropTypes.string,
};

function LoginForm({ setStep, email, password, handleInput }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await login(email, password);
      toast.success(data.message);
      setStep(2);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box
      w={"full"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      position="relative"
      alignItems={"center"}
    >
      <form onSubmit={handleSubmit}>
        <Box
          w="40rem"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          p={"20px"}
          h={"auto"}
          borderRadius={"20px"}
          gap={"12px"}
          bg={"#FFF239"}
          border={"2px solid #111317"}
          alignItems={"center"}
          borderRight={"5px solid #111317"}
          borderBottom={"5px solid #111317"}
        >
          <i>
            <svg
              width="56"
              height="56"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2000 2000"
            >
              <path
                id="Shape_325_1"
                data-name="Shape 325 1"
                d="M1835.76,280.547L1543.53,1141.16,924.952,1295.98s-108.93,163.68-272.9,261.82C404.441,1706,164.238,1719.45,164.238,1719.45l85.282-219.7L1283.14,821.275l-81.87,137.744,198.99,149.131L1603.8,518.467,830.573,683.532,1031.84,836.074,334.8,1285.73,636.131,524.159Z"
              />
            </svg>
          </i>

          <Text fontWeight={600} fontSize={"20px"} pb={"16px"}>
            Login
          </Text>

          <CustomInput
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleInput}
          />

          <CustomInput
            placeholder="Password"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleInput}
          />

          <Button
            _hover={{ backgroundColor: "black" }}
            w={"100%"}
            h={"5rem"}
            mt="2.4rem"
            bg="black"
            type="submit"
            name="submit"
            color={"#FFF239"}
            fontSize={"1.6rem"}
            borderRadius={"10px"}
          >
            {loading ? <Spinner size="md" color="#FFF239" /> : "Continue"}
          </Button>
        </Box>
      </form>
      <Box w={"100%"} pt={"60px"}>
        <Text textAlign={"right"}>© 2024 Payup. All rights reserved.</Text>
      </Box>
    </Box>
  );
}

export default LoginForm;
