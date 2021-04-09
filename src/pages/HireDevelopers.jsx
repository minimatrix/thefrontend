import React from 'react';
import LandingLayout from '../components/layouts/LandingLayout';
import { Heading, Box, Text, Flex } from '@chakra-ui/react';

export default function HireDevelopers() {
  return (
    <LandingLayout>
      <Flex width="100vw" bg="primary.600" color="white" p={8} textAlign="center" flexDirection="column" justifyContent="space-around" alignItems="center">
        <Heading>Hire Developers</Heading>
        <Box maxWidth={300}>
          <Text mt={5}>Our seasoned developers have experience across the full stack and are experts in Laravel, React and React Native. Coming from a software agency background, they're well versed in agile development processes and coding best practices</Text>

          <Text mt={5}>We dont believe in charging over the odds for developers, this is reflected in our competitive pricing and we even offer discount when hiring two developers at once. Giving you the opportunity to make progress even faster for less.</Text>
        </Box>
      </Flex>
    </LandingLayout>
  );
}
