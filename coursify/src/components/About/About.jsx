import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4';
import termsAndCondition from '../../assets/docs/termsAndCondition';
const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding="8">
    <VStack>
      <Avatar
        src="https://media.licdn.com/dms/image/C4D03AQEuXAJ2LiyK_A/profile-displayphoto-shrink_800_800/0/1662814207694?e=1681948800&v=beta&t=00cfDYXKRSIDOX9bKHEVbyxje3iEYwHGLmTL3KvEBTA"
        boxSize={['40', '48']}
      />
      <Text children="Co-Founder" opacity={'0.7'} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Nikhil Singh" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={'Hi, I am a aspiring web Developer.'}
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box>
    <video
      controls
      autoPlay
      muted
      loop
      src={introVideo}
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
    ></video>
  </Box>
);

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms & Condition"
      textAlign={['center', 'left']}
      my="4"
    />
    <Box h={'sm'} p="4" overflowY={'scroll'}>
      <Text
        textAlign={['center', 'left']}
        letterSpacing="widest"
        fontFamily={'heading'}
      >
        {termsAndCondition}
      </Text>
      <Heading
        children="Refund only applicable for cancellation within 7 days"
        my="4"
        size={'xs'}
      />
    </Box>
  </Box>
);
const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />

      <Stack m={'8'} direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          we are a video streaming platform with some premium courses available
          for you to learn and grow.
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />

      <TandC termsAndCondition={termsAndCondition} />
      <HStack my={'4'} padding="4">
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children={'payment is secured by Razorpay'}
        />
      </HStack>
    </Container>
  );
};

export default About;
