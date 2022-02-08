import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface ownProps {
  isAlive: boolean;
}

const Cell: FC<ownProps> = ({ isAlive }) => {
  const colour = isAlive ? 'blue.500' : 'blue.900';
  return <Box w="10" h="10" bg={colour} />;
};

export default Cell;
