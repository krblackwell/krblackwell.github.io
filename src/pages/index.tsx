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
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
  <div className={styles.welcomeMessage}>
    <p>🚧 This site is still under construction — but stay tuned!</p>
    <p>
      We're building a learning space for <strong>kids</strong>, <strong>parents</strong>, and <strong>teachers</strong> who want to explore coding together.
    </p>
    <p>
      Created by a mom who codes 💻❤️
    </p>
  </div>
  <section className={styles.missionSection}>
    <h2>The Mission</h2>
    <p>
      I want learning to code to be easy and available for free. Learning to code is about problem-solving, creativity, and learning how to figure things out. <strong>AI can't always give you an answer that works!</strong> My goal is to make coding meaningful to learners of all ages.
    </p>
    <p>
      This is created with kids in mind, but I know how helpful it is to have free interactive lessons without a login!
    </p>

    <h2>What You'll Find Here</h2>

    <h3>Interactive Python Lessons</h3>
    <p>
      Start with beginner-friendly lessons written in clear language. Lesson code is all tested so it works seamlessly for you.
    </p>
    <p>
      Part of coding is learning to think in a different way. I'm a data engineer so I can share my knowledge of coding, systems, program design and approaches. I don't want you to just learn code. I want you to learn how to code good programs!
    </p>

    <h3>Live Coding Notebooks</h3>
    <p>
      The lessons are created first as <a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer">Jupyter notebooks</a>. They are interactive ways of coding. And thanks to a package called <a href="https://jupyterlite.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">JupyterLite</a>, you can run and experiment with code right in your browser — no setup, no login, just coding.
    </p>
    <p><a href="/blog">How does Jupyter Lite work?</a></p>

    <h3>Glossary & Tags</h3>
    <p>
      Not sure what a word means? The glossary and descriptive tags help you find topics and projects that interest you.
    </p>

    <h3>Blog for Parents & Teachers</h3>
    <p>
      Tips, ideas, and inspiration for supporting young coders (and maybe learning something new yourself!).
    </p>

    <h2>How to Get Started</h2>

    <h3>Browse Lessons</h3>
    <p>
      Visit the Python link in the menu to start learning Python. Each lesson includes a link to an interactive notebook.
    </p>

    <h3>Explore the Glossary</h3>
    <p>
      The website has a dictionary you can use to refer to words you're not familiar with.
    </p>
  </section>

  <HomepageFeatures />
</main>

    </Layout>
  );
}
