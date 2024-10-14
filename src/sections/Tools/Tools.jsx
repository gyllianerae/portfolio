import React from 'react';
import styles from './ToolsStyles.module.css';

function Tools() {
    const tools = [
        {
            name: "Express.js",
            logo: ""
        },
        {
            name: "Node.js",
            logo: ""
        },
        {
            name: "MongoDB",
            logo: ""
        },
        {
            name: "MySQL",
            logo: ""
        },
        {
            name: "React",
            logo: ""
        },
        {
            name: "React Native"
        },
        {
            name: "Vue.js",
            logo: ""
        },
        {
            name: "Next.js",
            logo: ""
        },
        {
            name: "Quasar",
            logo: ""
        },
        {
            name: "TypeScript",
            logo: ""
        },
        {
            name: "JavaScript"
        },
        {
            name: "Bootstrap",
            logo: ""
        },
        {
            name: "Tailwind",
            logo: ""
        },
        {
            name: "Axios",
            logo: ""
        },
        {
            name: "Nodemon",
            logo: ""
        },
        {
            name: "Git",
            logo: ""
        },
        {
            name: "Mongoose",
            logo: ""
        },
        {
            name: "Socket.io",
            logo: ""
        },
        {
            name: "Cloudinary",
            logo: ""
        },
    ]

  return (
    <section id="tools">
        <h2>/tools</h2>
        <div className={styles.toolsContainer}>
        {tools.map((tool, index) => (
          <div key={index} className={styles.toolBox}>
            {/* <img src={tool.logo} alt={`${tool.name} logo`} className={styles.logo} /> */}
            <h3>{tool.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tools