import React, { useRef } from 'react';
import { Box, Input, Text, FormLabel } from '@chakra-ui/react';

const InputError = ({ message }) => {
  return (
    <Text color="red.600" fontSize={'xs'}>
      {message}
    </Text>
  );
};

const InputField = ({ errors, label, name, placeholder, isRequired, inputRef, isInvalid, initialRender, ...inputFieldProps }) => {
  console.log({ inputFieldProps });
  return (
    <Box>
      <FormLabel htmlFor={name}>
        {label}
        {isRequired && (
          <Text as="span" color="red.600">
            *
          </Text>
        )}
      </FormLabel>
      <Input ref={inputRef} name={name} placeholder={placeholder ? placeholder : label} isInvalid={isInvalid} {...inputFieldProps} />
      <Box mt={1}>
        {errors &&
          errors.map(e => {
            return <InputError message={e} />;
          })}
      </Box>
    </Box>
  );
};

export default InputField;