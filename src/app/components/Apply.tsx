import styles from "./Apply.module.css";
import { GOOGLE_FORM_URL } from "@/data";

export default function Apply() {
  return (
    <section className={styles.apply} id="apply">
      <div className={styles.blob} />
      <div className={styles.inner}>
        <div className={styles.eyebrow}>Ready to Start?</div>
        <h2 className={styles.title}>
          Take the First Step Toward Your Research Goals
        </h2>
        <p className={styles.subtitle}>
          Fill out a short application form and I&apos;ll get back to you
          within 48 hours to schedule your first session.
        </p>
        <div className={styles.actions}>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Apply Now — It&apos;s Free to Apply ✦
          </a>
          <p className={styles.note}>Typically responds within 48 hours</p>
        </div>
        <div className={styles.perks}>
          <div className={styles.perk}><span>✓</span> No commitment required</div>
          <div className={styles.perk}><span>✓</span> Personalised response</div>
          <div className={styles.perk}><span>✓</span> Limited spots available</div>
        </div>
      </div>
    </section>
  );
}
