import React from 'react'
import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.container}>
        <h2>/about</h2>
        <p className={styles.description}>
        I'm a passionate full stack developer with experience in building dynamic, responsive web applications from front to back. 
        I enjoy turning complex problems into simple, beautiful, and intuitive designs. With a strong foundation in both client-side 
        and server-side technologies, I strive to create seamless user experiences and efficient, scalable solutions.
        </p>
        <br/>
        <p className={styles.description}>
        With my background in accountancy, I bring a unique perspective to web development, understanding how to integrate technology 
        with business needs effectively. I'm always eager to learn and stay up-to-date with the latest trends in web development. 
        Let's build something amazing together!
        </p>
    </section>
  )
}

export default About