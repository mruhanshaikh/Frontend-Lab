import React from "react";

export default function ErrorScreen({ message }) {
  return (
    <>
      <div style={styles.overlay}>
        <div style={styles.card}>
          <div style={styles.icon}>!</div>

          <h1 style={styles.title}>Something Went Wrong</h1>

          <p style={styles.message}>
            {message || "Failed to fetch data. Please try again."}
          </p>

          <button
            style={styles.button}
            onClick={() => window.location.reload()}
          >
            Reload
          </button>
        </div>
      </div>
    </>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.4)",
    backdropFilter: "blur(8px)",
    zIndex: 999,
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "320px",
    padding: "30px",
    borderRadius: "20px",
    background: "#1e293b",
    color: "white",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },

  icon: {
    width: "70px",
    height: "70px",
    margin: "0 auto 20px",
    borderRadius: "50%",
    background: "#ef4444",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "36px",
    fontWeight: "bold",
  },

  title: {
    marginBottom: "12px",
    fontSize: "24px",
  },

  message: {
    color: "#cbd5e1",
    lineHeight: "1.5",
    marginBottom: "24px",
  },

  button: {
    border: "none",
    outline: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    background: "#ef4444",
    color: "white",
  },
};