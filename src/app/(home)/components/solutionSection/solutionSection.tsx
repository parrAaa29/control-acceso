import React from "react";
import styles from "./solutionSection.module.css";
import BlurFade from "@/components/ui/blur-fade";
import { BentoDemo } from "@/components/layout/bentoGrid";


const SolutionSection = () => {
    return (
        <>
            <section className={styles.solutionSection}>
                <BlurFade delay={0.25} inView>
                    <p className={styles.sectionLabel}>Solution</p>
                </BlurFade>
                <h2 className={styles.title}>
                    <BlurFade delay={0.25} inView>
                        Manually entering your data is a hassle.
                    </BlurFade>
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