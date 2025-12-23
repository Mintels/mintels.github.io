import styles from './Cards.module.css';

import leftArrow from './assets/leftArrow.svg';
import rightArrow from './assets/rightArrow.svg';

import RemIcon from './assets/Rem.png';
import RemExample from './assets/RemExample.png';

import DevourIcon from './assets/DevourTalent.png';
import DevourExample from './assets/DITExample.png';

import DebateHubIcon from './assets/DebateHub.png';
import DebateHubExample from './assets/DebateHubExample.png';

import { useState } from 'react';

export default function Cards() {

    const projects = [
        {
            icon: RemIcon,
            example: RemExample,
            title: "Rem - AI Companion",
            description: "Rem is a voice, memory, and personality-based AI personal companion. compared to conventional chatbots, Rem is an AI-powered assistant with the goal to feel more human. Rem, compared with conventional assistants, creates engaging and funny interactions by combining expressive voice synthesis and natural language understanding.",
            timeframe: "Jan 2025 - Present",
            link: "https://github.com/Mintels/Rem"
        },
        {
            icon: DebateHubIcon,
            example: DebateHubExample,
            title: "DebateHub - Articulation Trainer",
            description: "DebateHub is an online matchmaking platform that pairs users against each other to debate in a range of world affairs. Each debater receives an initial matchmaking rating (MMR), and after every debate they finish, their rating is either increased or reduced depending on how they explained and backed up their argument compared to the opposing debater.",
            timeframe: "Oct 2025 - Dec 2025",
            link: "https://github.com/debatesit/debatehub"
        },
        {
            icon: DevourIcon,
            example: DevourExample,
            title: "DIT - Discord Information Tool",
            description: 'DIT (formerly DVF) is a Discord Program developed to display "rich embedded" information for the talent agency DevourTalent. It answered common questions, and reduced the need for human moderation across communities. It was officially Discord Verified and deployed across 150+ seperate Discord servers worldwide.',
            timeframe: "Jun 2020 - Jun 2022",
            link: "https://github.com/Mintels/DIT"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    }; 

    const prevProject = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };

    return (
        <div className={styles.cardsContainer}>
            <img
                src={leftArrow}
                className={`${styles.arrow} ${styles.left}`}
                alt="Previous"
                onClick={prevProject}
            />

            <div className={styles.card}>

                <div className={styles.cardHeader}>

                <h2 className={styles.cardTitle}>
                    <img className={styles.cardIcon} src={projects[currentIndex].icon}></img>
                    {projects[currentIndex].title}
                </h2>

                <span className={styles.cardTimeframe}>
                    | {projects[currentIndex].timeframe}
                </span>

                </div>

                <img src={projects[currentIndex].example} className={styles.cardExample}></img>
                <p className={styles.cardDescription}>
                    {projects[currentIndex].description}
                </p>
                <a href={projects[currentIndex].link} className={styles.cardLink}>View Repository</a>
            </div>

                <img
                    src={rightArrow}
                    className={`${styles.arrow} ${styles.right}`}
                    alt="Next"
                    onClick={nextProject}
                />
        </div>
    )
}