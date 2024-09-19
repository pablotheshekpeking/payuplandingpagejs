import React from "react";
import { Button, Text } from "@chakra-ui/react";
import useUser from "../_hooks/useUser";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const router = useRouter();
  const { logout } = useUser();
  return (
    <Button
      onClick={() => {
        logout();
        router.push("/auth/login");
      }}
      bg={"none"}
      border={"none"}
      display={"flex"}
      gap={"8px"}
      mt={["10px", "10px", "0px", "0px"]}
    >
      <svg
        className="logout"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" rx="10" fill="#EFEFEF" />
        <rect width="32" height="32" rx="12" fill="#EFEFEF" />
        <g clip-path="url(#clip0_2135_2608)">
          <rect
            width="24"
            height="24"
            transform="translate(4 4)"
            fill="#EFEFEF"
          />
          <path
            d="M18 12V10C18 9.46957 17.7893 8.96086 17.4142 8.58579C17.0391 8.21071 16.5304 8 16 8H9C8.46957 8 7.96086 8.21071 7.58579 8.58579C7.21071 8.96086 7 9.46957 7 10V22C7 22.5304 7.21071 23.0391 7.58579 23.4142C7.96086 23.7893 8.46957 24 9 24H16C16.5304 24 17.0391 23.7893 17.4142 23.4142C17.7893 23.0391 18 22.5304 18 22V20"
            stroke="#111111"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 16H25M25 16L22 13M25 16L22 19"
            stroke="#111111"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2135_2608">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(4 4)"
            />
          </clipPath>
        </defs>
      </svg>
      <Text display={["block", "block", "none", "none"]}>Logout</Text>
    </Button>
  );
}

export default LogoutButton;
