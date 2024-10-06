import styles from './ProjectsStyles.module.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import freshBurger from '../../assets/fresh-burger.png';
// import hipsster from '../../assets/hipsster.png';
// import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import shapi0 from '../../assets/shapi-0.png';
import shapi1 from '../../assets/shapi-1.png';
import shapi2 from '../../assets/shapi-2.png';
import shapi3 from '../../assets/shapi-3.png';
import shapi4 from '../../assets/shapi-4.png';
import shapi5 from '../../assets/shapi-5.png';
import twitter0 from '../../assets/twitter-0.png';
import twitter1 from '../../assets/twitter-1.png';
import twitter2 from '../../assets/twitter-2.png';
import twitter3 from '../../assets/twitter-3.png';
import twitter4 from '../../assets/twitter-4.png';
import twitter5 from '../../assets/twitter-5.png';
import chatterbox0 from '../../assets/chatterbox-0.png';
import chatterbox1 from '../../assets/chatterbox-1.png';
import chatterbox2 from '../../assets/chatterbox-2.png';
import chatterbox3 from '../../assets/chatterbox-3.png';
import sweatlog0 from '../../assets/sweatlog-0.jpeg';
import sweatlog1 from '../../assets/sweatlog-1.jpeg';
import sweatlog2 from '../../assets/sweatlog-2.jpeg';

const Projects = () => {
  const projects = [
    {
      title: "Shapi",
      description: "Shapi is a modern eCommerce platform offering a seamless shopping experience with a comprehensive product catalog, secure payments, and order tracking. Built with React, Node.js, and MongoDB, Shapi is fast, responsive, and easy to manage.",
      images: [
        shapi0,
        shapi1,
        shapi2,
        shapi3,
        shapi4,
        shapi5
      ],
      sourceCodeLink: "https://github.com/gyllianerae/shapi-ecommerce",
      websiteLink: "https://shapi-ecommerce-frontend.onrender.com/",
    },
    {
      title: "Twitter App Clone",
      description: "A Twitter clone using the MERN stack (MongoDB, Express.js, React, Node.js). Users can create accounts, post tweets, like, retweet, and follow others. It features a responsive design, real-time updates, and secure authentication.",
      images: [
        twitter0,
        twitter1,
        twitter2,
        twitter3,
        twitter4,
        twitter5
      ],
      sourceCodeLink: "https://github.com/gyllianerae/twitter-clone",
      websiteLink: "https://twitter-clone-hni8.onrender.com/"
    },
    {
      title: "ChatterBox Chat App",
      description: "Chatterbox is a real-time chat application built using the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.io. It enables users to engage in instant messaging, creating a seamless communication experience. With features like private messaging, group chats, and user presence indicators, Chatterbox provides a dynamic platform for users to connect and converse in real time.",
      images: [
        chatterbox0,
        chatterbox1,
        chatterbox2,
        chatterbox3
      ],
      sourceCodeLink: "https://github.com/gyllianerae/chat-app",
    },
    {
      title: "SweatLog Exercise Tracker",
      description: "SweatLog is a MERN and Bootstrap-based exercise tracker that lets users log workouts. With an easy-to-use interface and real-time insights, it helps users stay motivated and reach their fitness targets efficiently.",
      images: [
        sweatlog0,
        sweatlog1,
        sweatlog2
      ],
      sourceCodeLink: "https://github.com/gyllianerae/exercise-tracker",
    }
  ]

  return (
    <section id="projects" className={styles.container}>
      <h2>/full stack projects</h2>
      <Row xs={1} md={2} className="g-4">
      {projects.map((project, idx) => (
        <ProjectCard 
        key={idx} 
        title={project.title} 
        description={project.description} 
        images={project.images} 
        sourceCodeLink={project.sourceCodeLink} 
        websiteLink={project.websitedLink} 
      />
      ))}
    </Row>
    </section>
  )
}

export default Projects