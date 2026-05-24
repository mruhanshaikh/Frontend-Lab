import React from "react";

export default function LoadingScreen() {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.card}>
          <div style={styles.loaderWrapper}>
            <div style={styles.ring}></div>
            <div style={styles.ring2}></div>
            <div style={styles.centerDot}></div>
          </div>

          <h2 style={styles.title}>Loading</h2>

          <div style={styles.bar}>
            <div style={styles.progress}></div>
          </div>

          <p style={styles.text}>Please wait while we prepare everything...</p>
        </div>
      </div>

      <style>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0% {
            transform: scaleX(0);
          }
          50% {
            transform: scaleX(0.6);
          }
          100% {
            transform: scaleX(1);
          }
        }

        @keyframes glow {
          0% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg, rgb(15, 23, 42), rgb(30, 41, 59))",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "320px",
    padding: "40px 30px",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
    textAlign: "center",
    color: "white",
  },

  loaderWrapper: {
    position: "relative",
    width: "100px",
    height: "100px",
    margin: "0 auto 30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  ring: {
    position: "absolute",
    width: "100px",
    height: "100px",
    border: "5px solid transparent",
    borderTop: "5px solid #60a5fa",
    borderRadius: "50%",
    animation: "rotate 1.2s linear infinite",
  },

  ring2: {
    position: "absolute",
    width: "70px",
    height: "70px",
    border: "5px solid transparent",
    borderBottom: "5px solid #38bdf8",
    borderRadius: "50%",
    animation: "rotate 0.8s linear infinite reverse",
  },

  centerDot: {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    background: "#7dd3fc",
    animation: "glow 1.5s ease-in-out infinite",
  },

  title: {
    margin: "0 0 20px",
    fontSize: "28px",
    letterSpacing: "1px",
  },

  bar: {
    width: "100%",
    height: "8px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "999px",
    overflow: "hidden",
    marginBottom: "16px",
  },

  progress: {
    height: "100%",
    width: "100%",
    transformOrigin: "left",
    background: "linear-gradient(90deg, #38bdf8, #60a5fa)",
    borderRadius: "999px",
    animation: "pulse 1.5s infinite alternate",
  },

  text: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.7)",
    lineHeight: "1.5",
  },
    };