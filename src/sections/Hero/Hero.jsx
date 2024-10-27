import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Hero() {
  const { theme, toggleTheme } = useTheme();
  
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      {/* <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="image" />
      </div> */}
      <div className={styles.info}>
        <p>hello! i'm</p>
        <h1> gylliane rae ✿</h1>
        {/* <h2>and i'm a <i>full stack web developer</i></h2> */}
        <p className={styles.description}> a full stack web developer</p>
        <span className={styles.socialIcons}>
          <a href="https://github.com/gyllianerae" target="_blank">
            <FaGithub className={styles.icons} />
          </a>
          <a href="https://www.linkedin.com/in/gylliane-permale-12b830331/" target="_blank">
            <FaLinkedin className={styles.icons} />
          </a>
          <a href="mailto:gyllianerae@gmail.com" target="_blank">
            <MdEmail className={styles.icons} />
          </a>
        </span>
        
        {/* <a href={CV} download>
          <button className='hover'>resume</button>
        </a> */}
      </div>
    </section>
  )
}

export default Hero;