import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Visit the Lab!',
    Svg: (require('@site/static/img/lab.svg').default),
    description: (
      <>
        <p><a href="/lite/lab/index.html?path=welcome.md">Start lessons in interactive notebooks. You can add code of your own to try out what you learn as you go.</a></p>
      </>
    ),
  },
  {
    title: 'Jump in!',
    Svg: (require('@site/static/img/foundations.svg').default),
    description: (
      <>
        <p><a href="/docs/python/foundations">(Start lessons in interactive notebooks. You can add code of your own to try out what you learn as you go.</a></p>
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: (require('@site/static/img/blog.svg').default),
    description: (
      <>
        <p><a href="/blog">(Blog for parents, teachers, and guardians. This is included to help you support your learners and know a little more about why coding is helpful for them.</a></p>
      </>
    ),
  },
];

function Feature({ title, Svg, Img, description }: FeatureItem & { Img?: string }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} />
        ) : Img ? (
          <img src={Img} className={styles.featureSvg} alt={title} />
        ) : null}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
