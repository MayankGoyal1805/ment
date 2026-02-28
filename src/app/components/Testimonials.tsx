import styles from "./Testimonials.module.css";
import { testimonials } from "@/data";

export default function Testimonials() {
  return (
    <section className={styles.testimonials} id="testimonials">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Testimonials</div>
          <h2 className={styles.title}>What Mentees Say</h2>
          <p className={styles.subtitle}>
            Real feedback from students who&apos;ve gone through the mentorship
            program.
          </p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars}>{"★".repeat(t.rating)}</div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
