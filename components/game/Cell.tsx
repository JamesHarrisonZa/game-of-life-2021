import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface ownProps {
  isAlive: boolean;
}

const Cell: FC<ownProps> = ({ isAlive }) => {
  if (isAlive) {
    return <Box w="10" h="10" bg="blue.500" />;
  }
  return <Box w="10" h="10" />;
};

export default Cell;
