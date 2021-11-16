import Head from 'next/head';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import FormattedDate from '../components/FormattedDate';
import Layout, { siteTitle } from '../components/layout';

const Home: React.FC = () => {
  const todayDate = new Date();

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <small className={utilStyles.lightText}>
        <FormattedDate date={todayDate} />
      </small>

      <section className={utilStyles.headingMd}>
        <p>Hi! </p>
        <p>Bla bla bla</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Starting grid</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem} key={1}>
            <Link href={`/game/forty-two`}>
              <a>{'42'}</a>
            </Link>
          </li>
          <li className={utilStyles.listItem} key={2}>
            <Link href={`/game/random`}>
              <a>{'Random'}</a>
            </Link>
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
