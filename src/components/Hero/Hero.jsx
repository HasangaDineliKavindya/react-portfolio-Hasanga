import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dineli Kavindya</h1>
        <p className={styles.description}>
          <br></br>
        I'm a Data Scientist Intern with experience <br></br>
        in machine learning, data analysis, and predictive modeling.
        <br></br>
         Reach out if you'd like to learn more!
        </p>
        <a href="mailto:hasangakavindya@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Hasanga.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
