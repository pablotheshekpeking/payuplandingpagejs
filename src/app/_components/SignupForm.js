import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import CustomInput from "./custominput";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import Link from "next/link";
import Error from "@/app/_components/Error";
import { signUp } from "../_lib/data-service";

SignupForm.propTypes = {
  setStep: PropTypes.func,
  setEmail: PropTypes.func,
};

function SignupForm({ setStep, setEmail }) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm();

  async function onSubmit(formData) {
    setEmail(formData.email);
    console.log("submit");
    setLoading(true);
    try {
      await signUp(formData);
      toast.success("Signup was successful");
      setStep(3);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: "50rem", maxWidth: "100%" }}
    >
      <Box
        w={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        p={"20px"}
        h={"auto"}
        borderRadius={"30px"}
        gap={"4px"}
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

        <Text fontWeight={600} fontSize={"2.4rem"} pb={"16px"}>
          Create an Account
        </Text>
        <Box display={"flex"} flexDirection="column" width="100%">
          <Box display={"flex"} gap={"1rem"}>
            <Box width={"50%"}>
              <CustomInput
                disabled={loading}
                type="text"
                placeholder="First Name"
                name="firstName"
                id="firstName"
                {...register("firstName", {
                  required: "This field is required",
                })}
              />

              <Error>{errors?.firstName?.message}</Error>
            </Box>

            <Box width={"50%"}>
              <CustomInput
                disabled={loading}
                type="text"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                {...register("lastName", {
                  required: "This field is required",
                })}
              />

              <Error>{errors?.lastName?.message}</Error>
            </Box>
          </Box>

          <Box>
            <CustomInput
              disabled={loading}
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />

            <Error>{errors?.email?.message}</Error>
          </Box>

          <Box>
            <CustomInput
              disabled={loading}
              placeholder="passowrd"
              type="password"
              name="Password"
              id="password"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,

                  message: "Password needs a minimum of 8 characters",
                },
                pattern: {
                  value: /(?=.*[A-Z])/,
                  message:
                    "Password must contain at least one uppercase letter",
                },
              })}
            />
            <Error>{errors?.password?.message}</Error>
          </Box>

          <Box>
            <CustomInput
              disabled={loading}
              placeholder="Confirm Password"
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              {...register("passwordConfirm", {
                required: "This field is required",
                validate: (value) =>
                  value === getValues().password || "Passwords need to match",
              })}
            />
            <Error>{errors?.passwordConfirm?.message}</Error>
          </Box>
        </Box>

        <Box w={"full"} textAlign={"left"}>
          <Box display="flex" gap="1rem" alignItems="center">
            <input
              style={{
                width: "2.3rem",
                height: "2.3rem",
                accentColor: "#F7EBE8",
              }}
              type="checkbox"
              {...register("agreeToTerms", {
                required: "You must agree to the terms",
              })}
            />
            <Text letterSpacing={"0.4px"}>
              I agree to Pay Up’s{" "}
              <Text as="span" fontWeight="bold" textDecoration="underline">
                Terms and Conditions.
              </Text>
            </Text>
          </Box>

          {errors?.agreeToTerms?.message && (
            <Error>{errors?.agreeToTerms?.message}</Error>
          )}

          <Button
            _hover={{ backgroundColor: "black" }}
            w={"100%"}
            my="2.5rem"
            disabled={loading}
            h={"5.8rem"}
            bg="black"
            type="submit"
            name="submit"
            color={"#FFF239"}
            borderRadius={"10px"}
            fontSize="1.6rem"
          >
            {loading ? <Spinner size="md" color="#FFF239" /> : "Continue"}
          </Button>

          <Text textAlign="center" fontSize="1.6rem">
            Have an account?{" "}
            <Link href="/login">
              <Text as="span" fontWeight="600">
                Log in
              </Text>
            </Link>
          </Text>
        </Box>
      </Box>
    </form>
  );
}

export default SignupForm;
