import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
// import '../styles/global.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
