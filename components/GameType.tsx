import { Button, Text, Stack } from '@chakra-ui/react';
import { ReactElement } from 'react';
import Link from 'next/link';

interface ownProps {
  title: string;
  linkUrl: string;
  text: string;
  icon?: ReactElement;
}

const GameType = ({ title, linkUrl, text }: ownProps) => {
  return (
    <Stack>
      <Link href={linkUrl}>
        <Button colorScheme="teal">{title}</Button>
      </Link>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};
export default GameType;
