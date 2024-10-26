//Basic styles import
import styles from './styles/about.module.scss';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutWrapper}>
        <article className={styles.textAbt}>
          <h1 id="h1BG">Cybersecurity</h1>

          <p>
            I love tinkering, even though I&apos;m probably not the typical analyst sitting infront of a scanner chasing down threat reports. You can find me buried in open source code, fiddling with scripts and exploiting in my spare time (~_^). Implementing reliable security systems is something I&apos;m committed to doing while looking chic.
          </p>
        </article>

        <article className={styles.textAbt}>
          <h1 id="h1BG">Engineering</h1>

          <p>
            I have the ideal tools for developing JavaScript applications, and I
            can definitely work without them to produce quick, durable solutions
            that are designed for growth &#8211; performance and scalability are
            top objectives on my radar.
          </p>
        </article>
      </div>
    </section>
  );
}
