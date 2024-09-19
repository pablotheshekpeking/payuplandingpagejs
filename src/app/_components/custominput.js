import React from "react";
import { FormControl, GridItem, Input } from "@chakra-ui/react";

const CustomInput = React.forwardRef(
  ({ type, name, id, value, onChange, placeholder, disabled = false }, ref) => {
    return (
      <FormControl as={GridItem} colSpan={6}>
        <Input
          ref={ref}
          disabled={disabled}
          fontSize="1.5rem"
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          focusBorderColor="brand.400"
          bg={"white"}
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          h="50px"
          borderRadius="8px"
          border="1px solid black"
        />
      </FormControl>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
