import React from 'react';
import { HStack, PinInput as ChakraPinInput, PinInputField } from '@chakra-ui/react';

const CustomPinInput = ({ name, id, value, onChange, placeholder }) => {
  return (
    <HStack>
      <ChakraPinInput value={value} onChange={onChange} id={id} name={name}>
        <PinInputField placeholder={placeholder} bg={'white'} />
        <PinInputField placeholder={placeholder} bg={'white'} />
        <PinInputField placeholder={placeholder} bg={'white'} />
        <PinInputField placeholder={placeholder} bg={'white'} />
        <PinInputField placeholder={placeholder} bg={'white'} />
        <PinInputField placeholder={placeholder} bg={'white'} />
      </ChakraPinInput>
    </HStack>
  );
};

export default CustomPinInput;
