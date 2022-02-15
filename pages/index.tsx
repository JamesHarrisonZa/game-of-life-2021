import { SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Head from 'next/head';
import GameType from '../components/game/GameType';
import FormattedDate from '../components/FormattedDate';
import Layout, { siteTitle } from '../components/layout/Layout';

const Home: FC = () => {
  const todayDate = new Date();

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <VStack w="full" h="full" p={10} spacing={10}>
        <Text as="b">
          <FormattedDate date={todayDate} />
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <GameType title={'42'} linkUrl={'/game/forty-two'}>
            <Text>
              {
                'The starting position will display the answer to life the universe and everything before initiating the game'
              }
            </Text>
          </GameType>
          <GameType title={'Random'} linkUrl={'/game/random'}>
            <Text>
              {
                'The starting position will be randomised for you and you will be able to generate new random starting positions'
              }
            </Text>
          </GameType>
          <GameType title={'Custom'} linkUrl={'/game/custom'}>
            <Text>
              {
                'The grid will be interactive and you will be able to create your own unique starting position before initiating the game'
              }
            </Text>
          </GameType>
        </SimpleGrid>
      </VStack>
    </Layout>
  );
};

export default Home;
