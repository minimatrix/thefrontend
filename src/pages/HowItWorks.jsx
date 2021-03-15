import React from 'react';

import Hero from '../components/sections/Hero';
import LandingLayout from '../components/layouts/LandingLayout';
import { Heading, Text, Box } from '@chakra-ui/react';

export default function HowItWorks() {
  return (
    <LandingLayout>
      <Heading as="h2" size="xl" color="primary.800">
        How it works
      </Heading>
      <Box m={20}>
        <Heading as="h3" size="md" color="primary.800" mb={15}>
          Say hello to Feedback Mode
        </Heading>
        <Text mb={15}>
          Users of your application can turn on "feedback mode" when using your
          application, this will be found at the bottom of the screen and will
          allow them to click on any element on the page and to provide a
          description of their feedback or bug.
        </Text>

        <Heading as="h3" size="md" color="primary.800" mb={15}>
          Select an element on the page (or the page itself)
        </Heading>
        <Text mb={15}>
          When in Feedback mode, elements on the screen will be clickable,
          allowing the user to select the specific part of your application that
          they wish to provide feedback for.
        </Text>

        <Heading as="h3" size="md" color="primary.800" mb={15}>
          Collect
        </Heading>
        <Text mb={15}>
          Collect the users feedback or bugs for the element they selected
          (including positive feedback too)
        </Text>

        <Heading as="h3" size="md" color="primary.800" mb={15}>
          Consolidate
        </Heading>
        <Text mb={15}>
          All feedback is then made available in the online platform for the
          project, so that you can easily pin-point where any issues / feedback
          has been made.
        </Text>

        <Heading as="h3" size="md" color="primary.800" mb={15}>
          Auto-Report
        </Heading>
        <Text mb={15}>
          If / when your application crashes, error logs will automatically be
          submitted to the platform so that you have full visibility of bugs
          that might have otherwise gone under the radar.
        </Text>

        <Heading as="h3" size="md" color="primary.800" mb={15}>
          Fix
        </Heading>
        <Text mb={15}>
          The exact page and element, along with a mini-screenshot of the
          selected component means that developers can easily find where issues
          need to be addressed.
        </Text>
      </Box>
    </LandingLayout>
  );
}
