import React from "react";
import {
  HStack,
  PinInput as ChakraPinInput,
  PinInputField,
} from "@chakra-ui/react";

const CustomPinInput = ({ name, id, value, onChange, fontSize = "1.6rem" }) => {
  return (
    <HStack>
      <ChakraPinInput
        value={value}
        onChange={onChange}
        placeholder=""
        id={id}
        name={name}
      >
        <PinInputField
          fontSize={fontSize}
          fontWeight={"medium"}
          bg={"white"}
          height="50px"
          width="50px"
          border="2px solid #333"
        />

        <PinInputField
          fontSize={fontSize}
          bg={"white"}
          height="50px"
          width="50px"
          border="2px solid #333"
        />
        <PinInputField
          fontSize={fontSize}
          fontWeight={"medium"}
          bg={"white"}
          height="50px"
          width="50px"
          border="2px solid #333"
        />
        <PinInputField
          fontSize={fontSize}
          fontWeight={"medium"}
          bg={"white"}
          height="50px"
          width="50px"
          border="2px solid #333"
        />
        <PinInputField
          fontSize={fontSize}
          fontWeight={"medium"}
          bg={"white"}
          height="50px"
          width="50px"
          border="2px solid #333"
        />
        <PinInputField
          fontSize={fontSize}
          fontWeight={"medium"}
          bg={"white"}
          height="50px"
          width="50px"
          border="2px solid #333"
        />
      </ChakraPinInput>
    </HStack>
  );
};

export default CustomPinInput;
