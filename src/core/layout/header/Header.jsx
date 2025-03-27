import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import portraitImg from "../../../assets/images/portrait_Nicoleta.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import cvPdf from "../../../assets/document/cv.pdf";
// import {download_link} from "./Header.module.scss";


const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
return (
    <header className={styles.header}>
        <div className={styles.nav_header} onClick={handleHomeClick}>
            <img
                src={portraitImg}
                alt="Nicoleta profil"
                className={styles.nav_header_img}
            />
            <h1 className={styles.title}>Développeuse Web</h1>
        </div>
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? styles.active : undefined
                        }
                    >
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? styles.active : undefined
                        }
                    >
                        À propos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? styles.active : undefined
                        }
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projets"
                        className={({ isActive }) =>
                            isActive ? styles.active : undefined
                        }
                    >
                        Projets
                    </NavLink>
                </li>
            </ul>
            <a
                href={cvPdf}
                download="cv.pdf" 
                className={styles.download_link}
            >
                CV <FontAwesomeIcon icon={faDownload} size="1x" />
            </a>
        </nav>
    </header>
);
};

export default Header;
