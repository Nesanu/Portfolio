import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //@fortawesome/react-fontawesome
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; //fortawesome/free-solid-svg-icons
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} - Nicoleta Esanu-Desbois - Mon Portfolio </p>
            <div className={styles.social}>
                <Link to="https://www.linkedin.com/in/nicoleta-esanu-45b24440/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </Link>
               
                <Link to="https://github.com/Nesanu/" target="_blank" >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;