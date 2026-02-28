import styles from "./Programs.module.css";
import { programs, GOOGLE_FORM_URL } from "@/data";

export default function Programs() {
  return (
    <section className={styles.programs} id="programs">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Mentorship Programs</div>
          <h2 className={styles.title}>Choose Your Path</h2>
          <p className={styles.subtitle}>
            Every session is tailored to your specific goals. Pick the format
            that works best for where you are right now.
          </p>
        </div>

        <div className={styles.grid}>
          {programs.map((p) => (
            <div
              key={p.id}
              className={`${styles.card} ${p.popular ? styles.popular : ""}`}
            >
              {p.popular && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              <div className={styles.cardTop}>
                <h3 className={styles.cardName}>{p.name}</h3>
                <span className={styles.duration}>{p.duration}</span>
                <div className={styles.price}>{p.price}</div>
                <p className={styles.desc}>{p.description}</p>
              </div>

              <ul className={styles.features}>
                {p.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.cta} ${
                  p.popular ? styles.ctaPrimary : styles.ctaOutline
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
