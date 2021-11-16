import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';

const GameRandom: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <h1>Will randomise the grid</h1>
    </Layout>
  );
};

export default GameRandom;
