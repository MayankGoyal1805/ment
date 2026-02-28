import styles from "./About.module.css";
import { mentor, achievements } from "@/data";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>About the Mentor</div>
          <h2 className={styles.title}>Meet {mentor.name}</h2>
          <p className={styles.bio}>{mentor.bio}</p>
        </div>

        <div className={styles.grid}>
          {achievements.map((a) => (
            <div key={a.title} className={styles.card}>
              <span className={styles.icon}>{a.icon}</span>
              <h3 className={styles.cardTitle}>{a.title}</h3>
              <p className={styles.cardDesc}>{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
