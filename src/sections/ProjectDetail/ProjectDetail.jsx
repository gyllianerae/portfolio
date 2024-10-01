import React from 'react';
import styles from './ProjectDetail.module.css';

const ProjectDetail = ({ project }) => {
  if (!project) return null;

  return (
    <div className={styles.detailContainer}>
      <h2>{project.h3}</h2>
      <img src={project.src} alt={project.h3} className={styles.projectImage} />
      <p>{project.description}</p>
      <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Deployed App</a>
      <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">View Source Code</a>
    </div>
  );
}

export default ProjectDetail;
