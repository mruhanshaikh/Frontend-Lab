import styles from "./Hero.module.css"
import HeroText from "./Atoms/Herotext/HeroText"
const Hero = () => {
  return (
    <main className={styles.hero}>
    <HeroText/>
    </main>
  )
}
    
export default Hero