import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  HStack,
  Center,
} from '@chakra-ui/react';

export default function LandingLayout(props) {
  return (
    <Flex direction="column" m="0 auto" {...props}>
      <Box bg="red.500" minH="90px">
        ss
      </Box>
      <Flex
        bg="blue.500"
        flexDirection="row"
        justifyContent="space-between"
        minH="90px"
        p="3"
      >
        <Box flex="1">
          <Text>First box</Text>
        </Box>
        <Box flexDir="row" flex="1">
          <Text>Second box</Text>
        </Box>
      </Flex>
      <Box
        bg="yellow.300"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minH="200px"
        p="3"
      >
        <Center>
          <HStack>
            <Box bg="white" p="2" rounded="true" rounded="lg">
              <Heading size="md">Test card 1</Heading>
            </Box>
            <Box bg="white" p="2" rounded="true" rounded="lg">
              2
            </Box>
            <Box bg="white" p="2" rounded="true" rounded="lg">
              3
            </Box>
          </HStack>
        </Center>
      </Box>
    </Flex>
  );
}
