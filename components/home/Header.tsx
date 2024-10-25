import React from 'react';
import Image from 'next/image';

import Fineboy from '../../public/home/pfp-pariola.jpg';

//Basic styles import
import styles from './styles/header.module.scss';

export default function Header() {
  return (
    <header id={styles.header}>
      <div className={styles.wrapperLanding}>
        <div className={styles.text}>
          <div className={styles.textI}>
            <div className={styles.gradientText}>
              <h1>Software</h1>

              <h1>
                Engineer<span>.</span>
              </h1>
            </div>

            <p>
              I like to craft solid and scalable Open-source products with great
              user experiences.
            </p>
          </div>

          <div className={styles.paraG}>
            <p id="h1BG">
              Highly skilled at AI/ML, design systems &amp; UI
              Engineering.
            </p>

            <p id="h1BG">
              Over two years of experience in building robust cybersecurity solutions for clients across the globe.
            </p>
          </div>
        </div>

        <div className={styles.imageH}>
          <div>
            {/*
              <Image
                src={Fineboy}
                className={styles.fineBoy}
                alt="Pariola's Picture"
                placeholder="blur"
              />
              */}
            <div
              role="img"
              aria-label="Pariola's Picture"
              className={styles.fineBoy}
            />
          </div>
          <span></span>
        </div>
      </div>
    </header>
  );
}
