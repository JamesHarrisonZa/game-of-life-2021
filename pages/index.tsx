import { Box, SimpleGrid, Center } from '@chakra-ui/react';
import Head from 'next/head';
import GameType from '../components/GameType';
import FormattedDate from '../components/FormattedDate';
import Layout, { siteTitle } from '../components/Layout';

const Home: React.FC = () => {
  const todayDate = new Date();

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Center p={4}>
        <FormattedDate date={todayDate} />
      </Center>
      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <GameType
            // icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'42'}
            linkUrl={'/game/forty-two'}
            text={
              'The starting position will display the answer to life the universe and everything before initiating the game'
            }
          />
          <GameType
            // icon={<Icon as={FcDonate} w={10} h={10} />}
            title={'Random'}
            linkUrl={'/game/random'}
            text={
              'The starting position will be randomised for you and you will be able to generate new random starting positions'
            }
          />
          <GameType
            // icon={<Icon as={FcDonate} w={10} h={10} />}
            title={'Custom'}
            linkUrl={'/game/custom'}
            text={
              'The grid will be interactive and you will be able to create your own unique starting position before initiating the game'
            }
          />
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default Home;
