import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn to code Python online for free. Code in the browser. No login. No subscriptions.">
      <HomepageHeader />
      <main>
  <div className={styles.welcomeMessage}>
    <p>🚧 This site is still under construction — but stay tuned!</p>
    <p>
      This is a learning space for <strong>kids</strong>, <strong>parents</strong>, and <strong>teachers</strong> who want to explore coding together. It's free and easy to get started.
    </p>
    <p>
      Created by a mom who codes 💻❤️
    </p>
  </div>
 
  <HomepageFeatures />
</main>
<script data-goatcounter="https://pebble-coding.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
    </Layout>
  );
}
