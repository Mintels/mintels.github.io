import styles from './Cards.module.css';
import leftArrow from './assets/leftArrow.svg';
import rightArrow from './assets/rightArrow.svg';
export default function Cards() {
    return (
        <div className={styles.cardsContainer}>
            <img src={leftArrow} className={styles.arrow} alt="Right Arrow" />
            <p> In Progress </p>
            <img src={rightArrow} className={styles.arrow} alt="Left Arrow" />
        </div>

    )
}