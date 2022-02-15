import { Box, useColorModeValue } from '@chakra-ui/react';
import { FC } from 'react';

interface ownProps {
  isAlive: boolean;
}

const Cell: FC<ownProps> = ({ isAlive }) => {
  const aliveColour = useColorModeValue('green.200', 'green.600');
  const cellColour = isAlive ? aliveColour : '';

  return <Box w="10" h="10" bg={cellColour} />;
};

export default Cell;
