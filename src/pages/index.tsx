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
      This is a learning space for <strong>kids</strong>, <strong>parents</strong>, and <strong>teachers</strong> who want to explore coding together.
    </p>
    <p>
      Created by a mom who codes 💻❤️
    </p>
  </div>
  <section className={styles.welcomeMessage}>
    <h2>The Mission</h2>
    <p>
      I want learning to code to be easy and free. Learning to code is about problem-solving, creativity, and learning how to figure things out. If you want to learn a skill that can help you make games, process documents, automate, and more, you're in the right place! It's a good skill for EVERYONE.
    </p>
    <p>
      This is created with kids in mind, but I made it so it's not annoying for adults.
    </p>

    <h2>What You'll Find Here</h2>

    <h3>Interactive Python Lessons</h3>
    <p>
      Start with beginner and kid-friendly lessons. Prepared lesson code is all tested behind the scenes so it works seamlessly for you.
    </p>
    <p>
      Part of coding is learning to think in a different way. I'm a data engineer so I can share my knowledge of coding, systems, program design and approaches. I don't want you to just learn code. I want you to learn how to code good programs!
    </p>

    <h3>Live Coding Notebooks in <a href="/lite/lab/index.html?path=welcome.md">The Lab</a></h3>
    <p>
      The lessons are created first as <a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer">Jupyter notebooks</a>. They are interactive ways of coding. And thanks to a package called <a href="https://jupyterlite.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">JupyterLite</a>, you can run and experiment with code right in your browser — no setup, no login, just coding.
    </p>
    <p><a href="/blog">How does Jupyter Lite work?</a></p>

    <h3>Tags</h3>
    <p>
      I haven't created search in this site yet, but you can find things with tags at the bottom of blogs and lessons.
    </p>

    <h3>Blog for Parents & Teachers</h3>
    <p>
      Tips, ideas, and inspiration for supporting young coders (and maybe learning something new yourself!).
    </p>

    <h2>How to Get Started</h2>

    <h3>Browse Lessons</h3>
    <p>
      Visit the Python link in the menu to start learning Python. Each lesson includes a link to an interactive notebook at the top. Right now, it's just a general pre-made "badge" from JupyterLite that says "try lite now." Click it to go to the interactive notebook. Add code and run it to test your understanding. Click the links at the top to get back to the lesson page.
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
