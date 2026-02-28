import styles from "./Hero.module.css";
import { mentor, GOOGLE_FORM_URL } from "@/data";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <span className={styles.badge}>✦ Research Mentorship</span>
        <h1 className={styles.headline}>
          Navigate Your <span className={styles.accent}>Research Journey</span>{" "}
          With Expert Guidance
        </h1>
        <p className={styles.sub}>
          Personalised 1-on-1 mentorship with {mentor.name}, {mentor.title} at{" "}
          {mentor.institution}. From your first research idea to acceptance at
          top global programs.
        </p>
        <div className={styles.actions}>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            Apply for Mentorship
          </a>
          <a href="#programs" className={styles.btnGhost}>
            Explore Programs ↓
          </a>
        </div>
        <div className={styles.statsRow}>
          {mentor.stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <strong className={styles.statVal}>{s.value}</strong>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
