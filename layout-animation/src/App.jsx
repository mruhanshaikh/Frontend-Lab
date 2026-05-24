import { motion } from "motion/react";
import { useState } from "react";

export default function App() {
  const [active, setactive] = useState("Home");
  const tabs = [
    "Home",
    "About",
    "Projects",
    "Contact",
  ];

  return (
    <>
      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          font-family:Inter,sans-serif;
          background:#060606;
          color:white;
        }

        .page{
          min-height:100vh;
          overflow:hidden;
          background:
          radial-gradient(circle at top left,
          rgba(139,92,246,0.18),
          transparent 35%),

          radial-gradient(circle at bottom right,
          rgba(6,182,212,0.18),
          transparent 35%),

          #060606;
        }

        .navbar{
          width:min(1200px,90%);
          margin:auto;
          padding:1.5rem 0;

          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        .logo{
          font-size:1.4rem;
          font-weight:700;
          letter-spacing:1px;
        }

        .tabs{
          display:flex;
          align-items:center;
          gap:1rem;
        }

        .tab{
          position:relative;
          border:none;
          background:transparent;
          color:rgba(255,255,255,0.7);
          font-size:1rem;
          cursor:pointer;
          padding:0.7rem 1rem;
        }

        .hero{
          width:min(1200px,90%);
          margin:auto;
          min-height:calc(100vh - 90px);

          display:grid;
          grid-template-columns:1fr 1fr;
          gap:4rem;
          align-items:center;
        }

        .heroContent{
          max-width:600px;
        }

        .badge{
          display:inline-block;
          margin-bottom:1.5rem;
          padding:0.5rem 1rem;

          border-radius:999px;

          border:1px solid rgba(255,255,255,0.1);

          background:rgba(255,255,255,0.05);

          color:#b4b4b4;

          font-size:0.9rem;
        }

        .heroContent h1{
          font-size:clamp(3rem,7vw,6rem);
          line-height:0.95;
          margin-bottom:1.5rem;
        }

        .heroContent p{
          color:rgba(255,255,255,0.7);
          line-height:1.8;
          font-size:1.1rem;
          margin-bottom:2rem;
        }

        .buttons{
          display:flex;
          gap:1rem;
          flex-wrap:wrap;
        }

        .primaryBtn,
        .secondaryBtn{
          border:none;
          padding:1rem 1.6rem;
          border-radius:16px;
          font-size:1rem;
          cursor:pointer;
        }

        .primaryBtn{
          background:white;
          color:black;
          font-weight:600;
        }

        .secondaryBtn{
          background:rgba(255,255,255,0.08);
          color:white;
          border:1px solid rgba(255,255,255,0.1);
        }

        .heroCard{
          position:relative;

          min-height:500px;

          border-radius:32px;

          border:1px solid rgba(255,255,255,0.08);

          background:rgba(255,255,255,0.04);

          backdrop-filter:blur(20px);

          overflow:hidden;

          padding:1.5rem;
        }

        .cardGlow{
          position:absolute;
          width:300px;
          height:300px;
          background:rgba(139,92,246,0.25);
          border-radius:50%;
          filter:blur(100px);

          top:-100px;
          right:-100px;
        }

        .mockNav{
          position:relative;
          z-index:2;

          display:flex;
          gap:0.6rem;
          margin-bottom:2rem;
        }

        .mockNav span{
          width:12px;
          height:12px;
          border-radius:50%;
          background:rgba(255,255,255,0.2);
        }

        .mockContent{
          position:relative;
          z-index:2;
        }

        .line{
          width:100%;
          height:20px;
          border-radius:999px;
          background:rgba(255,255,255,0.08);
          margin-bottom:1rem;
        }

        .lineShort{
          width:60%;
          height:20px;
          border-radius:999px;
          background:rgba(255,255,255,0.08);
          margin-bottom:3rem;
        }

        .grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:1rem;
        }

        .gridCard{
          height:140px;
          border-radius:24px;
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
        }

        @media(max-width:900px){

          .navbar{
            flex-direction:column;
            gap:1.5rem;
          }

          .tabs{
            flex-wrap:wrap;
            justify-content:center;
          }

          .hero{
            grid-template-columns:1fr;
            padding:4rem 0;
          }

          .heroCard{
            min-height:420px;
          }

          .heroContent{
            text-align:center;
            margin:auto;
          }

          .buttons{
            justify-content:center;
          }

        }

      `}</style>

      <div className="page">

        <nav className="navbar">

          <div className="logo">
            MotionUI
          </div>

          <div className="tabs">

            {tabs.map((tab) => (
              <button
                key={tab}
                className="tab"
                onClick={()=>setactive(tab)}
              >
                {tab}
                {active === tab && (
                <motion.div
                    layoutId="underline"
                    style={{
                      position: "absolute",
                      left: 0,
                      bottom: -5,
                      width: "100%",
                      height: 4,
                      background: "tomato",
                      borderRadius: 999,
                    }}
                  />)
                }
              </button>
            ))}

          </div>

        </nav>

        <section className="hero">

          <div className="heroContent">

            <span className="badge">
              Modern Motion Design
            </span>

            <h1>
              Shared Layout
              Animation
            </h1>

            <p>
              Smooth animated tab transitions
              using Framer Motion layoutId and
              understand how shared layout
              animation really works visually.
            </p>

            <div className="buttons">

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3
                }}
                whileTap={{
                  scale: 0.96
                }}
                className="primaryBtn"
              >
                Get Started
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3
                }}
                whileTap={{
                  scale: 0.96
                }}
                className="secondaryBtn"
              >
                Live Preview
              </motion.button>

            </div>

          </div>

          <motion.div
            whileHover={{
              y: -10,
              rotateX: 4,
              rotateY: -4
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            className="heroCard"
          >

            <div className="cardGlow"></div>

            <div className="mockNav">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="mockContent">

              <div className="line"></div>

              <div className="lineShort"></div>

              <div className="grid">

                <motion.div
                  whileHover={{
                    scale: 1.04
                  }}
                  className="gridCard"
                />

                <motion.div
                  whileHover={{
                    scale: 1.04
                  }}
                  className="gridCard"
                />

                <motion.div
                  whileHover={{
                    scale: 1.04
                  }}
                  className="gridCard"
                />

                <motion.div
                  whileHover={{
                    scale: 1.04
                  }}
                  className="gridCard"
                />

              </div>

            </div>

          </motion.div>

        </section>

      </div>
    </>
  );
}