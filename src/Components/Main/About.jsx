import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <div className={styles.aboutImage}>
        <img src="https://i.imgur.com/lYARCqI.jpeg" alt="AboutPageImage" />
      </div>
      {/* Who we are */}
      <section className={styles.content}>
        <h3>Who we are</h3>
        <ul>
          <li>Powered by Autistics is an Autistic led service organization.</li>
          <li>
            All programs are designed and implemented by Autistic Individuals.
          </li>
          <li>
            We use a Neurodiversity affirming, strength-based approach to
            nurture confident, self-assured Autistic individuals.
          </li>
        </ul>
      </section>
      <hr className={styles.horStyle} />
      {/* What we do */}
      <section className={styles.content}>
        <h3>What we do</h3>
        <p>
          We listen to the autistic community directly and build the services we
          wish we had ourselves. Currently this includes:
        </p>
        <ol>
          <li>Diagnosis for autistic children, teens and adults.</li>
          <li>
            Support and counselling for autistic people across all age groups.
          </li>
          <li>Support groups for Autistic people.</li>
          <li>Talks by autistic people about their lived experiences.</li>
          <li>Counsel and train parents/ family of Autistic individuals. </li>
          <li>Training of mainstream school teachers and principals</li>
        </ol>
        <p>We are here to Empower Autistic individuals and their families!</p>
      </section>
      <hr className={styles.horStyle} />
      {/* What makes us different from other service organisations */}
      <section className={styles.content}>
        <h3>What makes us different from other service organisations</h3>
        <p>
          Like the name says, Powered By Autistics has a 100% autistic staff.
          From the directors of the organization, to the programmers who built
          this site, and the writers who put up the material, we're all autistic.
        </p>
        <p>
          So we are an organisation for the Autistc people, run by the Autistc
          people.
        </p>
        <p>
          I don't think we should put up anything about what is Autism right
          now. We may need to think it through so that we don't sound as if we
          are catering only to a certain group of people.
        </p>
      </section>
    </div>
  );
}
