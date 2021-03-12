import React, { useState } from 'react';

import LandingLayout from '../components/layouts/LandingLayout';
import { Heading, Text, Box } from '@chakra-ui/react';
import { useForm, useInput } from '../utils/formbuilder';

const Features = () => {
  const form = useForm();

  const textInput = useInput(
    {
      name: 'text_input',
      displayName: 'Text Input',
      defaultValue: '',
      type: 'text',
      validation: {
        required: true,
        maxLength: 40000,
      },
    },
    form
  );

  // console.log({ form });

  return (
    <LandingLayout>
      <Heading as="h3">Send in the canary</Heading>
      <span>Form</span>
      {/* {renderForm()} */}
    </LandingLayout>
  );
};

export default Features;
