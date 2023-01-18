import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Welcome to {siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/tutorial">
            Genki API Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Genki Docs">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/* <a href="https://www.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_10172825.htm#query=illustrations%20work&position=19&from_view=search&track=sph">Image by pch.vector</a> on Freepik
        <a href="https://www.freepik.com/free-vector/features-overview-concept-illustration_7171478.htm#query=illustrations%20product&position=49&from_view=search&track=sph">Image by storyset</a> on Freepik
        <a href="https://www.freepik.com/free-vector/characters-people-holding-blockchain-network_2921442.htm#query=illustrations%20blockchain&position=5&from_view=search&track=sph">Image by rawpixel.com</a> on Freepik */}
      </main>
    </Layout>
  );
}
