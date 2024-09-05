import { FormControl, GridItem, Input } from "@chakra-ui/react";

const CustomInput = ({ type, name, id, value, onChange, placeholder }) => {
  return (
    <FormControl as={GridItem} colSpan={6}>
      <Input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        focusBorderColor="brand.400"
        bg={'white'}
        shadow="sm"
        size="sm"
        w="full"
        rounded="md"
        h="64px"
        borderRadius="20px"
        border="1px solid black"
      />
    </FormControl>
  );
};

export default CustomInput;
