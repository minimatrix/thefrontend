import React from 'react';

import Hero from '../components/sections/Hero';
import LandingLayout from '../components/layouts/LandingLayout';
import { Heading, Text, Box, Flex } from '@chakra-ui/react';

export default function BespokeSoftware() {
  return (
    <LandingLayout>
      <Flex width="100vw" bg="primary.600" color="white" p={8} textAlign="center" flexDirection="column" justifyContent="space-around" alignItems="center">
        <Heading>Bespoke Software</Heading>
        <Box maxWidth={300}>
          <Text mt={5}></Text>

          <Text mt={5}></Text>
        </Box>
      </Flex>
    </LandingLayout>
  );
}
