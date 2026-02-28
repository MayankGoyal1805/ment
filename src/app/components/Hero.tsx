import styles from "./Hero.module.css";
import { mentor, GOOGLE_FORM_URL } from "@/data";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.inner}>
        {/* Left: content */}
        <div className={styles.content}>
          <div className={styles.badge}>✦ Research Mentorship</div>
          <h1 className={styles.headline}>
            Navigate Your{" "}
            <span className={styles.gradientText}>Research Journey</span>{" "}
            With Expert Guidance
          </h1>
          <p className={styles.subheadline}>
            Get personalised 1-on-1 mentorship from {mentor.name},{" "}
            {mentor.title} at {mentor.institution}. From research proposals to
            university applications — we&apos;ve got you covered.
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
            <a href="#programs" className={styles.btnSecondary}>
              View Programs ↓
            </a>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {mentor.stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: visual card */}
        <div className={styles.visual}>
          <div className={styles.card}>
            <div className={styles.avatar}>PS</div>
            <div className={styles.cardInfo}>
              <strong>{mentor.name}</strong>
              <span>{mentor.title}</span>
              <span className={styles.institution}>{mentor.institution}</span>
            </div>
            <div className={styles.cardBadge}>Available for Sessions</div>
          </div>
          <div className={styles.floatCard1}>
            <span>🎓</span> 50+ students mentored
          </div>
          <div className={styles.floatCard2}>
            <span>⭐</span> 5.0 avg. rating
          </div>
        </div>
      </div>
    </section>
  );
}
