import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ananya Maheshwari</h1>
        <p className={styles.description}>
        As a devoted computer science student, I seek to utilize my solid programming and problem-solving skills for a career in technology, particularly in machine learning. Driven by curiosity and a passion for innovation, I'm dedicated to ongoing learning and significant contributions to computer science.

        </p>
        <a href="https://drive.google.com/file/d/1IZUJzfK7ZZW-6fJAVguX79VXqn16T-Bm/view?usp=sharing" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
