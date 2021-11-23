import { Button, Text, Stack, Flex } from '@chakra-ui/react';
import { ReactElement } from 'react';
import Link from 'next/link';

interface ownProps {
  title: string;
  linkUrl: string;
  text: string;
  icon?: ReactElement;
}

const GameType = ({ title, linkUrl, text, icon }: ownProps) => {
  return (
    <Stack>
      {/* <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'green.100'}
        mb={1}
      >
        {icon}
      </Flex> */}
      <Link href={linkUrl}>
        <Button colorScheme="teal">{title}</Button>
      </Link>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};
export default GameType;
