import styles from './ProjectsStyles.module.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectCard from '../../common/ProjectCard';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import solcock0 from '../../assets/solcock-0.png';
import solcock1 from '../../assets/solcock-1.png';
import solcockmeme0 from '../../assets/solcockmeme-0.png';
import solcockmeme1 from '../../assets/solcockmeme-1.png';
import solcockmeme2 from '../../assets/solcockmeme-2.png';
import solcockgame0 from '../../assets/solcockgame-0.png';
import solcockgame1 from '../../assets/solcockgame-1.png';
import solcockgame2 from '../../assets/solcockgame-2.png';
import donbilsorian0 from '../../assets/donbilsorian-0.png';
import donbilsorian1 from '../../assets/donbilsorian-1.png';
import renaldu0 from '../../assets/renaldu-0.png';
import renaldu1 from '../../assets/renaldu-1.png';
import mcsteve0 from '../../assets/mcsteve-0.png';
import buddies0 from '../../assets/buddies-0.png';
import buddies1 from '../../assets/buddies-1.png';
import buddies2 from '../../assets/buddies-2.png';
import buddies3 from '../../assets/buddies-3.png';

// import shapi0 from '../../assets/shapi-0.png';
// import shapi1 from '../../assets/shapi-1.png';
// import shapi2 from '../../assets/shapi-2.png';
// import shapi3 from '../../assets/shapi-3.png';
// import shapi4 from '../../assets/shapi-4.png';
// import shapi5 from '../../assets/shapi-5.png';
// import twitter0 from '../../assets/twitter-0.png';
// import twitter1 from '../../assets/twitter-1.png';
// import twitter2 from '../../assets/twitter-2.png';
// import twitter3 from '../../assets/twitter-3.png';
// import twitter4 from '../../assets/twitter-4.png';
// import twitter5 from '../../assets/twitter-5.png';
// import chatterbox0 from '../../assets/chatterbox-0.png';
// import chatterbox1 from '../../assets/chatterbox-1.png';
// import chatterbox2 from '../../assets/chatterbox-2.png';
// import chatterbox3 from '../../assets/chatterbox-3.png';
// import sweatlog0 from '../../assets/sweatlog-0.jpeg';
// import sweatlog1 from '../../assets/sweatlog-1.jpeg';
// import sweatlog2 from '../../assets/sweatlog-2.jpeg';

const Projects = () => {
  const projects = [
    // {
    //     title: "Meme Maker",
    //     description: "The SolCock Meme Maker, built with HTML, CSS, and JavaScript, lets users customize the Solana Chicken by dressing it up in unique outfits or generating random looks. Users can reset their designs and download their favorite memes, adding a fun touch to the SolCock community.",
    //     images: [
    //         solcockmeme0,
    //         solcockmeme1,
    //         solcockmeme2
    //     ],
    //     sourceCodeLink: "https://github.com/18103864/solanacock/tree/main/mememaker-assets",
    //     websiteLink: "https://solcock.xyz/meme-maker",
    // },
    {
        title: "Flappy Cock Game",
        description: "Flappy Cock is a fun game dedicated to the SolCock memecoin, inspired by the popular Flappy Bird. Built with JavaScript, players guide the SolCock character through a series of challenging obstacles, aiming for the highest score while enjoying a playful twist on the classic gameplay.",
        images: [
            solcockgame0,
            solcockgame1,
            solcockgame2,
        ],
        sourceCodeLink: "https://github.com/18103864/solanacock/tree/main/flappy-cock",
        websiteLink: "https://solcock.xyz/flappy-cock/"
    },
    {
        title: "Don Billsorian Meme Maker",
        description: "The Don Billsorian Meme Maker, launched on Solana and pump.fun, is built with HTML, CSS, and JavaScript, allowing users to customize Don Billsorian by dressing it up in unique outfits or generating random looks. Users can reset their designs and download their favorite memes, adding a fun touch to the $BILLS community.",
        images: [
            donbilsorian0,
            donbilsorian1
        ],
        sourceCodeLink: "https://github.com/gyllianerae/don-bilsorian",
        websiteLink: "https://donbillsorianmememaker.xyz/"
    },
    {
        title: "$SOLCOCK Crypto MemeCoin Website",
        description: "The SolCock website is the official hub for the playful SolCock memecoin, launched on Solana and pump.fun. Built using HTML, CSS, and JavaScript, it offers news, community updates, and resources for buying, selling, and engaging with the vibrant SolCock community.",
        images: [
          solcock0,
          solcock1
        ],
        sourceCodeLink: "https://github.com/18103864/solanacock",
        websiteLink: "https://solcock.xyz/",
    },
    {
        title: "$RENALDU Crypto MemeCoin Website",
        description: "The $RENALDU website is a playful clone of Cristiano Ronaldo's official site, dedicated to the $RENALDU memecoin launched on Solana and pump.fun. It features interactive animations using JavaScript, offering fans a unique platform to explore the memecoin community, track performance, and engage with exciting updates, blending football fandom and crypto culture in a fun way.",
        images: [
            renaldu0,
            renaldu1
        ],
        sourceCodeLink: "https://github.com/gyllianerae/cristianoronaldo",
        websiteLink: "https://renaldu.xyz/#cr7",
    },
    {
        title: "$MCS Crypto MemeCoin Website",
        description: "The $MCS (McSteve) website is dedicated to the McSteve memecoin, launched on Solana and pump.fun, featuring a design inspired by Minecraft. ",
        images: [
            mcsteve0
        ], 
        sourceCodeLink: "https://github.com/gyllianerae/mcsteve",
        websiteLink: "https://mcsteve.fun/"
    },
    {
        title: "$BUDDIES Crypto MemeCoin Website",
        description: "The $BUDDIES website is dedicated to the playful memecoin celebrating the budding friendship between Trump and Elon Musk. ",
        images: [
            buddies0,
            buddies1,
            buddies2,
            buddies3
        ],
        sourceCodeLink: "https://github.com/gyllianerae/buddies",
        websiteLink: "https://trumpbuddies.fun/"
    }
  ]

  return (
    <section id="projects" className={styles.container}>
      <h2>/frontend projects</h2>
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