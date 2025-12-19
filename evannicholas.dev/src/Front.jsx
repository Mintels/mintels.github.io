import styles from './Front.module.css'
import { Link } from 'react-router-dom';
export default function Front() {
    return (
        <main className={styles.hero}>
            <h1 className={styles.heading}>Hello, I'm <span className={styles.highlight}>Evan</span>.</h1>
            <h2 className={styles.subheading}><span className={styles.highlight}>Full-Stack</span> Developer — Northeastern University</h2>
            <Link to="/Cards"><button className={styles.learnButton}> Learn More </button></Link>
        </main>
    );
}