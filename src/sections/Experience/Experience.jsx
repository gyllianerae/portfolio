import React from 'react'
import styles from './Experience.module.css';

function Experience() {
    const workExperience = [
        {
          company: "Freelance Crypto Projects",
          position: "Full Stack Developer",
          duration: "Jun 2024 - Aug 2024",
        },
        {
          company: "Pixel8 Web Solutions & Consultancy Inc.",
          position: "Frontend Developer",
          duration: "Feb 2024 - Jun 2024",
        },
        {
          company: "AV Tidoso & Co.",
          position: "Accounting Intern",
          duration: "Feb 2023 - May 2023",
        },
        {
            company: "Nick Gray",
            position: "Virtual Assistant",
            duration: "May 2022 - Nov 2022"
        }
      ];

  return (
    <section id="experience">
        <h2>/experience</h2>
        <div>
        <ul>
            {workExperience.map((experience, index) => (
            <li key={index}>
                <h3>{experience.company}</h3>
                <p>{experience.position}</p>
                <p>{experience.duration}</p>
            </li>
            ))}
        </ul>
        </div>
    </section>
  )
}

export default Experience