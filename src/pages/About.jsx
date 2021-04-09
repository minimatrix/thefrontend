import React from 'react';
import LandingLayout from '../components/layouts/LandingLayout';
import { Heading, Box, Text, Flex } from '@chakra-ui/react';

export default function About() {
  return (
    <LandingLayout>
      <Flex width="100vw" bg="primary.600" color="white" p={8} textAlign="center" flexDirection="column" justifyContent="space-around" alignItems="center">
        <Heading>About us</Heading>
        <Box maxWidth={300}>
          <Text mt={5}>
            <b>The Bridge Software Ltd</b> is a new business, founded by two developers as a result of the affects of the Coronavirus Pandemic. After working together closely over the past 5 years at a software house, both Jonny and Max vowed to stick together to continue to build high quality software.
          </Text>
        </Box>
      </Flex>
    </LandingLayout>
  );
}
