import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentFail = () => {
  return (
    <Container h={'95vh'}>
      <VStack justifyContent={'center'} h="full" spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading
          textTransform={'uppercase'}
          my="4"
          textAlign={'center'}
          size="lg"
          children="Payment Failed"
        />
        <Link to="/subscribe">
          <Button variant="ghost">Try Again</Button>
        </Link>
      </VStack>
    </Container>
  );
};
export default PaymentFail;
