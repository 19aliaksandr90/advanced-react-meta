import React from 'react';
import { Avatar, Heading, VStack } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';

const greeting = 'Hello, I am Aliaksandr!';
const bio1 = 'A frontend developer';
const bio2 = 'specialised in React';

const LandingSection = () => (
  <FullScreenSection
    justifyContent='center'
    alignItems='center'
    isDarkBackground
    backgroundColor='#2A4365'
  >
    <Avatar src='https://github.com/19Alexandr90.png' size='xl' />
    <VStack>
      <Heading size='md'>{greeting}</Heading>
      <br />
      <br />
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
