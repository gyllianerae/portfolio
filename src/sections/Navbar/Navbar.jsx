import { useContext, useState } from 'react';
import styles from './Navbar.module.css';
import { useTheme } from '../../common/ThemeContext';
import { FiSun, FiMoon } from "react-icons/fi";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

function Navbar() {
    const { theme, toggleTheme } = useTheme();
    // const themeIcon = theme === 'light' ? FaToggleOff : FaToggleOn;
    const isLightTheme = theme === 'light';
    const [nav, setNav] = useState(false);
    const navLinks = [
        { id: 1, title: "About", path: "#about" },
        { id: 2, title: "Experience", path: "#history" },
        { id: 3, title: "Projects", path: "#tools" },
        { id: 4, title: "Tools", path: "#projects" },
    ];

    return (
        <section id="navbar" className={styles.container}>
            <h3>GYLLIANE RAE</h3>

            <ul className={styles.links}>
              <li className={styles.about}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setNav(false);
                }}>
                Home
                </li>
              {navLinks.map((navLink) => (
                <a key={navLink.id} href={navLink.path} className="">
                  <li onClick={() => setNav(false)}>{navLink.title}</li>
                </a>
              ))}
              <li> <FiSun/> </li>
              <li onClick={toggleTheme}> {isLightTheme ? <FaToggleOff /> : <FaToggleOn />} </li>
              <li> <FiMoon/> </li>
            </ul>

        </section>
    )
}

export default Navbar