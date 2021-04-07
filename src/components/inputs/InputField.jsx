import React, { useRef } from 'react';
import { Box, Input, Checkbox, Text, FormLabel } from '@chakra-ui/react';

const InputError = ({ message }) => {
  return (
    <Text color="red.600" fontSize={'xs'}>
      {message}
    </Text>
  );
};

const InputField = ({ errors, label, name, placeholder, isRequired, type, inputRef, isInvalid, initialRender, ...inputFieldProps }) => {
  const renderInputField = () => {
    switch (type) {
      case 'checkbox':
        const { value, defaultValue } = inputFieldProps;
        return <Checkbox size={'sm'} isChecked={value} ref={inputRef} name={name} placeholder={placeholder ? placeholder : label} isInvalid={isInvalid} {...inputFieldProps} />;

      default:
        return <Input size={'sm'} ref={inputRef} name={name} placeholder={placeholder ? placeholder : label} isInvalid={isInvalid} {...inputFieldProps} />;
    }
  };

  return (
    <Box>
      <FormLabel fontSize="sm" htmlFor={name}>
        {label}
        {isRequired && (
          <Text as="span" color="red.600">
            *
          </Text>
        )}
      </FormLabel>
      {renderInputField()}

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
