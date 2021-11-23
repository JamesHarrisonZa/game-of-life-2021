import { Flex } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const name = 'James';
export const siteTitle = 'Game of life 2021';

interface ownProps {
  home?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<ownProps> = ({ home = false, children }: ownProps) => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex direction="column">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Welcome to my tech demo. Game of life 2021"
          />
          <meta name="og:title" content={siteTitle} />
        </Head>
        <header /*className={styles.header}*/>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                // className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 /*className={utilStyles.heading2Xl}*/>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    // className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 /*className={utilStyles.headingLg}*/>
                <Link href="/">
                  <a /*className={utilStyles.colorInherit}*/>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div /*className={styles.backToHome}*/>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </Flex>
    </Flex>
  );
};

export default Layout;
