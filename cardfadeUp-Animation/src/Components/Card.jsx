import style from "./Card.module.css"
import {motion} from "motion/react"

export default function Card() {
  return (
    <motion.div initial={{opacity:[0,1],y:[100,0]}} animate={{opacity:[1,0],y:[0,100]}} transition={{duration:3,delay:1,ease:'linear',repeat:Infinity}} className={style.card}>
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        alt="Card"
        className={style.cardImage}
      />

      <div className={style.cardContent}>
        <span className={style.tag}>Frontend</span>

        <h2>Modern Card Design</h2>

        <p>
          Clean and reusable card component with hover animation, shadow,
          responsive layout, and modern UI styling.
        </p>

        <button>Read More</button>
      </div>
    </motion.div>
  );
}