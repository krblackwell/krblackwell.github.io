import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Visit the Lab!',
    Svg: (require('@site/static/img/lab.svg').default),
    link: "/lite/lab/index.html?path=welcome.ipynb",
    description: (
      <>
        <p>Start lessons in interactive notebooks. You can add code of your own to try out what you learn as you go.</p>
      </>
    ),
  },
  {
    title: 'Jump in!',
    Svg: (require('@site/static/img/foundations.svg').default),
    link: "/docs/python/foundations",
    description: (
      <>
        <p>Start lessons in interactive notebooks. You can add code of your own to try out what you learn as you go.</p>
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: (require('@site/static/img/blog.svg').default),
    link: "/blog",
    description: (
      <>
        <p>(Blog for parents, teachers, and guardians. This is included to help you support your learners and know a little more about why coding is helpful for them.</p>
      </>
    ),
  },
];

function Feature({ title, Svg, Img, description, link }: FeatureItem & { Img?: string }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <a href={link} className={styles.featureLink}>
        {Svg ? (
          <Svg className={styles.featureSvg} />
        ) : Img ? (
          <img src={Img} className={styles.featureSvg} alt={title} />
        ) : null}
       </a>
      </div>
      <div className="text--center padding-horiz--md">
        <a href={link} className={styles.featureLink}>
          <Heading as="h3">{title}</Heading>
        </a>
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
