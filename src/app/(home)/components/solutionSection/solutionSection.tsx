import React from "react";
import styles from "./solutionSection.module.css";
import BlurFade from "@/components/ui/blur-fade";
import { BentoDemo } from "./components/bentoGrid";


const SolutionSection = () => {
    return (
        <>
            <section className={styles.solutionSection}>
                    <p className={styles.sectionLabel}>Solution</p>
                <h2 className={styles.title}>
                        Manually entering your data is a hassle.
                </h2>

                <BlurFade delay={0.25} inView>
                    <p className={styles.description}>
                        We help you automate your data entry process so you can focus on what matters most.
                    </p>
                </BlurFade>

                <BlurFade delay={0.25} inView>
                    <div className={styles.gridContainer}>
                        <BentoDemo/>
                    </div>
                </BlurFade>
            </section>
        </>
    );
};

export default SolutionSection;