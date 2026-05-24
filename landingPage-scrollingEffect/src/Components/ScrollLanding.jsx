import styles from "./ScrollLanding.module.css";
import { easeIn, easeInOut, motion } from "motion/react"

const parent = {
    start: {},
    end: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const child = {
    start: {
        opacity: 0.5,
        scale: 0.9
    },
    end: {
        opacity: 1,
        scale: 1,
    },
}

const child2 = (x) => ({
    start: {
        x,
        opacity: 0.5
    },
    end: {
        x: 0,
        opacity: 1
    }
})

const child3 = {
    start: {
        y:100,
        opacity: 0.5
    },
    end: {
        y: 0,
        opacity: 1
    }
}

// const child2= {
//     start:{
//         x:-100
//     },  
//     end:{
//         x:0,
//          transition: {
//      duration: 0.6,
//      ease: "easeOut"
//  }
//     }
// }

// const child3= {
//     start:{
//         x:100
//     },  
//     end:{
//         x:0,
//          transition: {
//      duration: 0.6,
//      ease: "easeOut"
//  }
//     }
// }

export default function ScrollLanding() {
    return (
        <main className={styles.page}>
            {/* HERO */}
            <motion.section className={styles.hero}>
                <motion.div variants={parent} initial="start" whileInView="end" className={styles.heroContent}>
                    <motion.p variants={child} className={styles.tag}>✨ Modern Experience</motion.p>

                    <motion.h1 variants={child}>
                        Build Products <br />
                        People Love
                    </motion.h1>

                    <motion.p variants={child} className={styles.desc}>
                        Create immersive user experiences with modern layouts,
                        responsive sections, and smooth interactions.
                    </motion.p>

                    <motion.div variants={child} className={styles.actions}>
                        <motion.button variants={child} className={styles.primaryBtn}>
                            Get Started
                        </motion.button>

                        <motion.button variants={child} className={styles.secondaryBtn}>
                            Learn More
                        </motion.button>
                    </motion.div>
                </motion.div>
                <motion.div className={styles.heroImage}>
                    <motion.img
                        initial={{ y: 50, opacity: 0.5 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: easeIn }}
                        viewport={{ amount: 0.6 }}
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
                        alt="workspace"
                    />
                </motion.div>
            </motion.section>

            {/* FEATURES */}
            <motion.section className={styles.features}>
                <motion.div viewport={{ amount: 1 }} variants={parent} initial="start" whileInView="end" className={styles.sectionHeading}>
                    <motion.p variants={child}>FEATURES</motion.p>
                    <motion.h2 variants={child}>Designed for modern teams</motion.h2>
                </motion.div>

                <motion.div viewport={{ amount: 0.9 }} variants={parent} initial="start" whileInView="end" className={styles.grid}>
                    <motion.article variants={child2(-100)} className={styles.card}>
                        <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
                            alt="feature"
                        />

                        <h3>Fast Workflow</h3>

                        <p>
                            Organize projects and collaborate with your
                            team efficiently.
                        </p>
                    </motion.article>
                    <motion.article className={styles.card}>
                        <img
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                            alt="feature"
                        />

                        <h3>Developer Friendly</h3>

                        <p>
                            Clean systems and scalable architecture for
                            modern applications.
                        </p>
                    </motion.article>
                    <motion.article variants={child2(100)} className={styles.card}>
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                            alt="feature"
                        />

                        <h3>Team Collaboration</h3>

                        <p>
                            Work together seamlessly with powerful shared
                            workflows.
                        </p>
                    </motion.article>
                </motion.div>
            </motion.section>

            {/* SPLIT SECTION */}
            <section className={styles.split}>
                <motion.div initial={{ y: 70, opacity: 0.5 }}
                    whileInView={{ y: -70, opacity: 1 }}
                    transition={{ duration: 1, ease: easeIn }}
                    viewport={{ amount:0.4}} className={styles.splitImage}>
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop"
                        alt="dashboard"
                    />
                </motion.div>

                <motion.div  viewport={{amount:0.6}} variants={parent} initial="start" whileInView="end" className={styles.splitContent}>
                    <motion.p variants={child}>WHY CHOOSE US</motion.p>

                    <motion.h2 variants={child}>
                        Everything you need <br />
                        in one platform
                    </motion.h2>

                    <motion.p variants={child}>
                        Simplify workflows, improve collaboration, and
                        build better digital experiences with modern tools.
                    </motion.p>

                    <motion.ul viewport={{amount:1}} variants={parent} initial="start" whileInView="end" >
                        <motion.li variants={child}>✔ Responsive layouts</motion.li>
                        <motion.li variants={child}>✔ Modern UI components</motion.li>
                        <motion.li variants={child}>✔ Scalable architecture</motion.li>
                        <motion.li variants={child}>✔ Smooth user experience</motion.li>
                    </motion.ul>
                </motion.div>
            </section>

            {/* STATS */}
            <motion.section viewport={{ amount: 0.9 }} variants={parent} initial="start" whileInView="end" className={styles.stats}>
                <motion.div variants={child2(-100)}>
                    <h2>120K+</h2>
                    <p>Active Users</p>
                </motion.div>

                <motion.div>
                    <h2>98%</h2>
                    <p>Customer Satisfaction</p>
                </motion.div>

                <motion.div variants={child2(100)}>
                    <h2>24/7</h2>
                    <p>Global Support</p>
                </motion.div>
            </motion.section>

            {/* CTA */}
            <motion.section variants={parent} viewport={{amount:0.9}} variants={parent} initial="start" whileInView="end" className={styles.cta}>
                <motion.h2 variants={child3}>Start building today</motion.h2>

                <motion.p variants={child3}>
                    Create modern experiences with beautiful responsive layouts.
                </motion.p>

                <motion.button variants={child3}>Launch Project</motion.button>
            </motion.section>
        </main>
    );
}