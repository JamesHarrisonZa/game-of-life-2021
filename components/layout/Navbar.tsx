import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Heading,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const gradientStartColour = useColorModeValue('cyan.400', 'cyan.600');
  const gradientEndColour = useColorModeValue('pink.500', 'purple.600');
  const bgGradient = `linear(to-r, ${gradientStartColour}, ${gradientEndColour})`;

  return (
    <>
      <Box bgGradient={bgGradient} px={10}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Heading as="h2" size="lg">
            <Link href={'/'}>
              <a>Game of life 2022</a>
            </Link>
          </Heading>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button bg="inherit" onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar size={'sm'} src={'/images/profile.jpg'} />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar size={'2xl'} src={'/images/profile.jpg'} />
                  </Center>
                  <br />
                  <Center>
                    <p>James</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
