import React from 'react';
import { useHistory } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import LandingLayout from '../components/layouts/LandingLayout';
import { Box, Flex, Button, Heading, Text, SimpleGrid } from '@chakra-ui/react';

const Service = ({ description, title, icon, ctaText, ctaAction, ctaRedirect }) => {
  let history = useHistory();

  const redirect = () => {
    history.push(ctaRedirect);
  };

  return (
    <Box textAlign="center" bg="white" p={10} rounded={'lg'}>
      <Heading as="h3" size="lg" color="primary.700" fontWeight={900}>
        {title}
      </Heading>
      <Text mt={15}>{description}</Text>
      <Button mt={5} onClick={() => redirect()}>
        {ctaText}
      </Button>
    </Box>
  );
};

export default function Landing() {
  return (
    <LandingLayout>
      <Hero title="Software that gets your business where it needs to be" subtitle="Take the next steps for your business." image="https://source.unsplash.com/800x600/?software+meeting" ctaText="Get in touch today" ctaLink="/contact" />
      <Box
        display="flex"
        flexDirection="column"
        bg="primary.500"
        w="100vw"
        position="relative"
        _before={{
          top: 0,
          transform: 'skewY(5deg)',
          transformOrigin: '100% 0',
          background: 'inherit',
          height: '200px',
          content: `""`,
          left: 0,
          position: 'absolute',
          right: 0,
          zIndex: -1,
        }}
      >
        <Heading size="xl" as="h2" color="white" alignSelf="center">
          Our Services
        </Heading>
        <Box m={20} alignSelf="center">
          <SimpleGrid columns={[1, null, 3]} spacing="10">
            <Service description="Whether your business is looking to embark on a complete Digital Transformation journey or if you simply need to make your processes more robust, efficient and accessible remotely. We're experts in building systems from the ground up to meet your requirements" icon="Icon" title="Bespoke Software" ctaText={'Get a quote'} ctaRedirect={'/bespoke-software'} />
            <Service description="If you already have a software solution in place that needs maintenence, requires additional features building or even if you dont want to commit to a complete software solution. Our developers have a minimum of 10 years experience and can be hired at a competitive price." icon="Icon" title="Hire a developer" ctaText={'Availability, Pricing and more'} ctaRedirect="/hire-developers" />
            <Service description="Ready to take your business online? We build all types of websites from simple brochure websites to full blown e-commerce sites. No matter what sort of website you need, you'll also be provided with the tools to manage the content of the site." icon="Icon" title="Websites" ctaText={'Get a quote'} ctaRedirect="/websites" />
          </SimpleGrid>
        </Box>
      </Box>
    </LandingLayout>
  );
}
