import { ChakraProvider } from "@chakra-ui/react";
import { FC } from "react";
import { AppProps } from "next/app";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
