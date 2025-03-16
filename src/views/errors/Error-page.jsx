import styles from "./Error-pages.module.scss";  
import { Link, useRouteError } from "react-router-dom";

  /**
   * @module ErrorPage
   * @description
   * Ce composant représente une page d'erreur.
   * @returns {JSX.Element} - Une page d'erreur.
   * @example
   * <ErrorPage />
    */
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <section className={styles.errorPage}>
      <h1 className={styles.errorTitle}>Page indisponible</h1>
     
      <img
        src="https://media.giphy.com/media/3o7buirYcmV5nSwIRW/giphy.gif"
        alt="404"
        className={styles.errorImage} 
      />
      <p className={styles.errorMessage}>
      {error && error?.status === 404 ? "Le projet n'existe pas." : "Une erreur inattendue s'est produite."}
      </p>
      <Link to="/" className={styles.errorRedirection}>
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
}

