"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { GOOGLE_FORM_URL } from "@/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoStar}>✦</span> MentorConnect
        </a>
        <ul className={styles.links}>
          <li><a href="#about">About</a></li>
          <li><a href="#programs">Programs</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          Apply Now
        </a>
      </div>
    </nav>
  );
}
