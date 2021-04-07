import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text, Button, SimpleGrid } from '@chakra-ui/react';
import { ReactComponent as WhiteLogo } from '../../resources/images/bridgelogo_white.svg';

const CustomLink = ({ ...props }) => {
  return (
    <Text
      fontSize="sm"
      _hover={{
        color: 'primary.400',
        cursor: 'pointer',
      }}
    >
      {props.children}
    </Text>
  );
};

const Footer = ({ props }) => {
  return (
    <Box w="100vw" minHeight={200} bg="gray.700" px={100} py={10} textColor="white">
      <SimpleGrid columns={[1, null, 3]} spacing="40">
        <Flex flexDirection="column">
          <svg height="55px">
            <WhiteLogo color="black" className="blogo" width="100px" />
          </svg>
          <Text mt={15} fontSize="sm" fontWeight="900">
            The Bridge Software Ltd
          </Text>
          <Text fontSize="sm">12 Scholars Green</Text>
          <Text fontSize="sm">Lea</Text>
          <Text fontSize="sm">Preston</Text>
          <Text fontSize="sm">PR2 1QN</Text>
        </Flex>
        <Flex flexDirection="column">
          <Text fontSize="sm" mb={15} fontWeight="900">
            Links
          </Text>
          <CustomLink fontSize="sm">Home</CustomLink>
          <CustomLink>Hire a developer</CustomLink>
          <CustomLink fontSize="sm">Bespoke Software</CustomLink>
          <CustomLink fontSize="sm">About us</CustomLink>
          <CustomLink fontSize="sm">Testimonials</CustomLink>
          <CustomLink fontSize="sm">Pricing</CustomLink>
          <CustomLink fontSize="sm">Contact / Enquiries</CustomLink>
        </Flex>

        <Flex flexDirection="column">
          <Text fontSize="sm" fontWeight="900">
            Contact
          </Text>
          <Text mt={15} fontSize="sm">
            Email: hello@thebridgesoftware.co.uk
          </Text>
          <Text fontSize="sm">Phone: 07713930234</Text>
          {/* 
          <Text mt={5} fontSize="sm" fontWeight="900">
            Social
          </Text>
          <Text mt={15} fontSize="sm">
            Facebook
          </Text>
          <Text fontSize="sm">Twitter</Text>
          <Text fontSize="sm">Instagram</Text> */}
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
