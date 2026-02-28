import styles from "./Footer.module.css";
import { mentor, GOOGLE_FORM_URL } from "@/data";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoStar}>✦</span> MentorConnect
          </div>
          <p className={styles.tagline}>
            Guiding the next generation of researchers, one session at a time.
          </p>
        </div>

        <div className={styles.links}>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#apply">Apply</a></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul>
              <li><a href="mailto:mentor@example.com">mentor@example.com</a></li>
              <li>
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                  Application Form
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 {mentor.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
