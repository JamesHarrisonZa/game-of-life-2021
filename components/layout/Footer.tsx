import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        minH={20}
        maxH={20}
        px={10}
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        spacing={4}
      >
        <Stack direction={'row'} spacing={6}>
          <Link href={'/'}>Home</Link>
          <Link href={'/info/about'}>About</Link>
          <Link href={'/info/contact'}>Contact</Link>
        </Stack>
        <Text>© 2021 James Harrison</Text>
      </Container>
    </Box>
  );
};

export default Footer;
