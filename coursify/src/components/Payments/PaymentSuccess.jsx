import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <Container h={'95vh'} p="16">
      <Heading
        my="4"
        textAlign={'center'}
        size="lg"
        children="You have Premium Pack"
      />
      <VStack boxShadow={'lg'} pb="16" alignItems={'center'} borderRadius="lg">
        <Box
          w={'full'}
          bg="yellow.400"
          padding={'4'}
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text color="black">Payment Success</Text>
        </Box>

        <Box p="4">
          <VStack textAlign={'center'} px="8" mt="4" spacing={'8'}>
            <Text>
              Congratulations you're are a premium subscriber. You have access
              to premimum content.
            </Text>
            <Heading size={'4xl'}>
              <RiCheckboxCircleFill />
            </Heading>
          </VStack>
        </Box>
        <Link to="/profile">
          <Button variant="ghost">Go to Profile</Button>
        </Link>

        <Heading size={'xs'}>Reference: payment reference number.</Heading>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
