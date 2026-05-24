import { useState } from "react"
import { AnimatePresence,motion} from "motion/react"

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div style={styles.container}>
      <button
        style={styles.button}
        onClick={() => setOpen(!open)}
      >
        {open ? "Close Card" : "Open Card"}
      </button>

      <AnimatePresence mode="popLayout">
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 40,
            scale: 0.9
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut"
          }}
          style={styles.card}
        >
          <div style={styles.top}>
            <div style={styles.avatar}></div>

            <div>
              <h2 style={styles.title}>Motion Card</h2>
              <p style={styles.subtitle}>
                Smooth animation practice
              </p>
            </div>
          </div>

          <p style={styles.description}>
           React animation project built using Motion to explore how `AnimatePresence` works
          </p>
          
          <div style={styles.tags}>
            <span style={styles.tag}>React</span>
            <span style={styles.tag}>Motion</span>
            <span style={styles.tag}>Animation</span>
          </div>
        </motion.div>
      )}
       </AnimatePresence>
    </div>
  )
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f172a",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "24px",
    fontFamily: "sans-serif"
  },

  button: {
    padding: "14px 24px",
    border: "none",
    borderRadius: "12px",
    background: "#3b82f6",
    color: "white",
    fontSize: "16px",
    cursor: "pointer"
  },

  card: {
    width: "340px",
    padding: "24px",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "white",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
  },

  top: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "20px"
  },

  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, #60a5fa, #8b5cf6)"
  },

  title: {
    margin: 0,
    fontSize: "22px"
  },

  subtitle: {
    margin: "4px 0 0",
    color: "#cbd5e1",
    fontSize: "14px"
  },

  description: {
    lineHeight: 1.6,
    color: "#e2e8f0",
    marginBottom: "20px"
  },

  tags: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap"
  },

  tag: {
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.1)",
    fontSize: "13px"
  }
}