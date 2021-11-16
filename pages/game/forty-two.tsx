import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';

const GameFortyTwo: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <h1>42</h1>
    </Layout>
  );
};

export default GameFortyTwo;
