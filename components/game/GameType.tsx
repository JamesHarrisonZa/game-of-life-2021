import { Button, Text, Stack } from '@chakra-ui/react';
import Link from 'next/link';

interface ownProps {
  title: string;
  linkUrl: string;
  children: React.ReactNode;
}

const GameType: React.FC<ownProps> = ({
  title,
  linkUrl,
  children,
}: ownProps) => {
  return (
    <Stack>
      <Link href={linkUrl} passHref>
        <Button colorScheme="teal">{title}</Button>
      </Link>
      {children}
    </Stack>
  );
};

export default GameType;
