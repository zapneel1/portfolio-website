//Basic styles import
import Link from 'next/link';
import styles from './styles/footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id={styles.footer}>
      <div className={styles.footWrapper}>
        <div className={styles.ulBox}>
          <h3>say hello</h3>

          <ul>
            <li>
              <a href="mailto:swapneellayek@kgpian.iitkgp.ac.in">hi@swapneel</a>
            </li>
            <li>
              <a
                href=""
                target="_blanket"
                rel="noopener"
              >
                blog.swapneel
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.ulBox}>
          <ul>
            <li>
              <Link href="#projects">My Works</Link>
            </li>
            <li>
              <a
                href="https://github.com/zapneel1"
                target="_blanket"
                rel="noopener"
              >
                My Shelf
              </a>
            </li>
            <li>
              <a href="files/resume.pdf" target="_blanket" rel="noopener">
                My Résumé
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footBase}>
        <small>&copy; Swapneel Layek {year}</small>

        <ul>
          <li>
            <a
              href="https://github.com/zapneel1"
              target="_blanket"
              rel="noopener"
            >
              gh
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/swapneel-layek/"
              target="_blanket"
              rel="noopener"
            >
              ln
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/thvibezon"
              target="_blanket"
              rel="noopener"
            >
              ig
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
