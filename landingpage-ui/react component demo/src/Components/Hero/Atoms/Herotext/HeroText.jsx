import styles from "./HeroText.module.css";
import styles2 from "@/Components/Header/Atoms/Buttons/Button.module.css"
const HeroText = () => {
    return (
        <div className={styles.HeroText}>
            <div className={styles.wrapper}></div>
             <div className={styles.mainText}>
                <h1>
                    Level Up Your Game: Proven Techniques for Success
                </h1>
                <h2>
                    Perfecting the Forehand: Technique and Grip
                </h2>
                <div>
                    <button className={styles2.btn}>Let's Play</button>
                    <button className={styles2.btn}>Scorboard</button>
                </div>
            </div>
        </div>
    )
}

export default HeroText