// src/common/ProjectCard.jsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import styles from './ProjectCard.module.css'; // Optionally create a styles module for ProjectCard

const ProjectCard = ({ title, description, images, sourceCodeLink, websiteLink }) => {
  return (
    <Col>
      <Card className={styles.card}>
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className={`${styles.carouselImage} d-block w-100`}
                src={image}
                alt={`Slide ${index}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '5%',
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Title className={styles.title}>{title}</Card.Title>
          <Card.Text className={`${styles.description} fs-6`}>
            {description}
          </Card.Text>
          <div className="d-flex justify-content-center mt-2">
            <Button className={`${styles.button} me-2`} href={sourceCodeLink} target="_blank" rel="noopener noreferrer">Source Code</Button>
            <Button className={styles.button} href={websiteLink} target="_blank" rel="noopener noreferrer">Deployed Website</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
