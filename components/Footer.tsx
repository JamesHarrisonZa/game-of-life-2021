import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'row'} spacing={6}>
          <Link href={'/'}>Home</Link>
          {/* <Link href={'/About'}>About</Link>
          <Link href={'/Contact'}>Contact</Link> */}
        </Stack>
        <Text>© 2021 James Harrison</Text>
      </Container>
    </Box>
  );
};

export default Footer;
