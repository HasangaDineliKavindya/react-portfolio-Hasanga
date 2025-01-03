import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me working with data"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
            <h3>Data Scientist</h3>
              <p>
                I work on analyzing and deriving insights from complex datasets to support decision-making and business strategies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Machine Learning icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning Enthusiast</h3>
              <p>
                I am passionate about building machine learning models and applying algorithms to solve real-world problems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Analytics icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analytics</h3>
              <p>
                I specialize in using data analytics techniques to uncover valuable insights from large datasets, helping to inform business strategy and decisions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
