/* eslint-disable @next/next/no-img-element */
import React from 'react';

//Basic styles import
import styles from './styles/experience.module.scss';

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div className={styles.expWrapper}>
        <article className={styles.expText}>
          <h1 id="h1BG">Over the years,</h1>

          <p>(~_^)</p>

          <p>
            I&apos;ve built products for companies and individuals around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences. Currently, I&apos;m studying at <a href="https://www.iitkgp.ac.in">IIT Kharagpur</a> as a Btech UG in my prefinal year.
          </p>

          <p>
            Before now, I worked as an intern at Tradebot, crafting thoughtful and inclusive experiences that adhere to web standards. Prior to that, I have been a part time Bug bounty hunter at <a href= "https://www.hackerone.com">Hackerone</a> and <a href= "https://www.bugcrowd.com">Bugcrowd</a>, reporting vulnerabilities and issuing patches to clients worldwide.
          </p>
        </article>
      </div>
    </section>
  );
}
