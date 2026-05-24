import styles from "./HeroSection.module.css";
import { motion } from "motion/react";

const parent = {
    start:{},
    end:{
        transition:{
            staggerChildren:0.2
        }
    }
}

const children={
    start:{
        opacity:0,
        y:20
    },
    end:{
        opacity:1,
        y:0
    }
}
export default function HeroSection() {
  return (
    <motion.section variants={parent} initial="start" animate="end" className={styles.hero}>
      <div className={styles.overlay}></div>

      <nav className={styles.nav}>
        <motion.h2 variants={children} className={styles.logo}>Nova</motion.h2>

        <div className={styles.links}>
          <motion.a variants={children} href="/">Home</motion.a>
          <motion.a variants={children} href="/">Features</motion.a >
          <motion.a variants={children} href="/">Pricing</motion.a >
          <motion.a variants={children} href="/">Contact</motion.a >
        </div>

        <motion.button variants={children} className={styles.navBtn}>Get Started</motion.button>
      </nav>

      <div className={styles.content}>
        <motion.p className={styles.tag}
        variants={children}
        >
          🚀 Modern UI Experience
        </motion.p>

        <motion.h1
        variants={children}
        >
          Build Stunning <br /> Web Experiences
        </motion.h1>

        <motion.p
          variants={children}
          className={styles.desc}
        >
          Create beautiful animations and interactive interfaces
          using React and Motion.
        </motion.p>

        <div
          className={styles.actions}
        >
          <motion.button className={styles.primaryBtn} variants={children}>
            Start Project
          </motion.button>

          <motion.button className={styles.secondaryBtn} variants={children}>
            Live Demo
          </motion.button>
        </div>
      </div>

      <motion.div
      variants={children}
        className={styles.card}
      >
        <div className={styles.cardTop}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>

        <div className={styles.graph}></div>

        <div className={styles.lines}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.div>
    </motion.section>
  );
}