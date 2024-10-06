import React from 'react';
import styles from './ToolsStyles.module.css';

function Tools() {
    const tools = [
        {
            name: "MongoDB",
            logo: ""
        },
        {
            name: "Express.js",
            logo: ""
        },
        {
            name: "React",
            logo: ""
        },
        {
            name: "MySQL",
            logo: ""
        },
        {
            name: "Node.js",
            logo: ""
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
            name: "Axios",
            logo: ""
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
            name: "Nodemon",
            logo: ""
        },
        {
            name: "Socket.io",
            logo: ""
        },
        {
            name: "Git",
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