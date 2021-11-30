import { Box } from '@chakra-ui/react';

interface ownProps {
  isAlive: boolean;
}

const Cell: React.FC<ownProps> = ({ isAlive }) => {
  if (isAlive) {
    return <Box w="10" h="10" bg="green.500" />;
  }
  return <Box w="10" h="10" bg="blue.500" />;
};

export default Cell;
