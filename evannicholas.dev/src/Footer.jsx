import styles from './Footer.module.css';
import linkedinIcon from './assets/linkedin.svg';
import githubIcon from './assets/github.svg';

export default function Footer() {
    return (
        <footer className={styles.socialMedia}>
            <a href="https://github.com/Mintels"><img className={styles.socialIcon}  src={githubIcon} alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/evancnicholas"><img className={styles.socialIcon} src={linkedinIcon} alt="LinkedIn" /></a>
        </footer>
    );
}
