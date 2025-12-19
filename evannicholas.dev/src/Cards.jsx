import styles from './Cards.module.css';

export default function Cards() {
    return (
        <div className={styles.cardsContainer}>
            <img src="https://via.placeholder.com/150" alt="Card 1" />
            <p> In Progress </p>
            <img src="https://via.placeholder.com/150" alt="Card 2" />
        </div>

    )
}