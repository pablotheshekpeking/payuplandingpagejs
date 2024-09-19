import { Box, Spinner, Button, Text } from "@chakra-ui/react";
import React from "react";
import CustomPinInput from "@/app/_components/pininput";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { verifyOtp } from "../_lib/data-service";
import { useAuth } from "../_contexts/AuthProvider";

OtpForm.propTypes = {
  email: PropTypes.string.isRequired,
  setOtp: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired,
  otp: PropTypes.string.isRequired,
  handleInput: PropTypes.func,
};

const OTP_EXPIRES = 5 * 60;
function OtpForm({ email, otp, setOtp, setStep }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [time, setTimer] = useState(OTP_EXPIRES);
  const { setUser } = useAuth();

  const min = `${Math.floor(time / 60)}`.padStart(2, "0");
  const sec = `${time % 60}`.padStart(2, "0");

  // Set Opt expires countdown
  useEffect(() => {
    setOtp({ target: { name: "otp", value: "" } });

    const timer = setInterval(() => {
      setTimer((time) => {
        if (time > 0) {
          return time - 1;
        } else {
          clearInterval(timer);
          return 0; // Set timer to 0
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await verifyOtp(email, otp);
      setUser({ ...data.user, token: data.token });
      router.push("/user/dashboard");
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      w={"full"}
      display={"flex"}
      flexDirection={"column"}
      bg={"#F7EBE8"}
      justifyContent={"center"}
      position="relative"
      alignItems={"center"}
    >
      <form onSubmit={handleSubmit}>
        <Box
          w={"100%"}
          display={"flex"}
          textAlign={"center"}
          flexDirection={"column"}
          justifyContent={"center"}
          p={"2rem"}
          h={"auto"}
          borderRadius={"2rem"}
          bg={"#FFF239"}
          border={"2px solid #111317"}
          borderRight={"5px solid #111317"}
          borderBottom={"5px solid #111317"}
        >
          <i
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1667 9.16602H42L46.6667 17.3327L49 25.4993H7L9.33333 17.3327L15.1667 9.16602Z"
                fill="black"
              />
              <path d="M14 17.333H42V38.333H14V17.333Z" fill="#FFF239" />
              <path
                d="M7 20.834H8.16667L23.3333 32.5007H32.6667L46.6667 22.0007L49 20.834V48.834H7V20.834Z"
                fill="black"
              />
              <path
                d="M32.6667 33.6667H23.3333M32.6667 33.6667L40.8333 27.25L49 20.8333M32.6667 33.6667L49 48.8333M49 20.8333L43.1667 8H14L7 20.8333M49 20.8333V48.8333M23.3333 33.6667L7 20.8333M23.3333 33.6667L7 48.8333M7 20.8333V48.8333M49 48.8333H7"
                stroke="#FFF239"
              />
              <path
                d="M20.4508 28.6279L19.3728 27.8439L20.4228 26.4159L18.7428 25.8559L19.1628 24.5958L20.8288 25.1419V23.3778H22.1588V25.1419L23.8249 24.5958L24.2449 25.8559L22.5788 26.4159L23.6149 27.8439L22.5368 28.6279L21.4868 27.1859L20.4508 28.6279ZM26.9587 28.6279L25.8807 27.8439L26.9307 26.4159L25.2507 25.8559L25.6707 24.5958L27.3367 25.1419V23.3778H28.6668V25.1419L30.3328 24.5958L30.7528 25.8559L29.0868 26.4159L30.1228 27.8439L29.0448 28.6279L27.9947 27.1859L26.9587 28.6279ZM33.4667 28.6279L32.3886 27.8439L33.4387 26.4159L31.7586 25.8559L32.1786 24.5958L33.8447 25.1419V23.3778H35.1747V25.1419L36.8407 24.5958L37.2607 25.8559L35.5947 26.4159L36.6307 27.8439L35.5527 28.6279L34.5027 27.1859L33.4667 28.6279Z"
                fill="black"
              />
            </svg>
          </i>
          <Text fontSize={"2rem"} mb={"2.4rem"} fontWeight={600}>
            Security Verification
          </Text>
          <Text fontSize={"1.4rem"} mb={"2.4rem"}>
            Enter the code sent to your domain <strong>@email.com</strong>
          </Text>
          <Text
            textAlign={"start"}
            mb={"4px"}
            fontWeight={"bold"}
            fontSize={"1.2rem"}
          >
            Authentication code
          </Text>
          <CustomPinInput
            type="text"
            name="otp"
            id="otp"
            value={otp}
            onChange={(value) => setOtp({ target: { name: "otp", value } })}
          />
          <Box
            display={"flex"}
            fontSize={"1.3rem"}
            justifyContent={"space-between"}
            mt={"4px"}
          >
            <Text fontSize="inherit">
              Expires in{" "}
              <span style={{ fontWeight: "bold" }}>
                {min}:{sec}
              </span>
            </Text>
            <Text
              fontSize="inherit"
              fontWeight={"bold"}
              textDecor={"underline"}
            >
              Resend
            </Text>
          </Box>

          <Button
            _hover={{ backgroundColor: "black" }}
            w={"100%"}
            h={"5rem"}
            mt="2.4rem"
            bg="black"
            type="submit"
            name="submit"
            fontSize={"1.6rem"}
            color={"#FFF239"}
            borderRadius={"10px"}
          >
            {loading ? <Spinner size="md" color="#FFF239" /> : "Continue"}
          </Button>

          <Button
            onClick={() => setStep((step) => step - 1)}
            _hover={{ backgroundColor: "transparent", color: "inherit" }}
            bg={"#FFF239"}
            mt="10px"
          >
            <Text textColor={"#333"}>Back</Text>
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default OtpForm;
