import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    Svg: require('@site/static/img/undraw_welcome_re_h3d9.svg').default,
    description: (
      <>
        GenkiBox APIs were designed from the ground up to be easily installed and
        used to get your campaign data and user data quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    Svg: require('@site/static/img/undraw_designer_re_5v95.svg').default,
    description: (
      <>
        GenkiBox APIs let you focus on your marketing campaigns, and we&apos;ll do the chores.
      </>
    ),
  },
  {
    title: 'Web 3.0 Support',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    Svg: require('@site/static/img/undraw_ether_re_y7ft.svg').default,
    description: (
      <>
        GenkiBox APIs empower you to verify actions on blockchain and bring a new world of doing marketing campaigns.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
