import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container h={'95vh'}>
      <VStack justifyContent={'center'} h="full" spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading
          my="4"
          textAlign={'center'}
          size="lg"
          children="Page Not Found"
        />
        <Link to="/">
          <Button variant="ghost">Go to Home</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default NotFound;
