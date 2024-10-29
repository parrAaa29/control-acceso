import React from "react";
import styles from "./solutionSection.module.css";
import BlurFade from "@/components/ui/blur-fade";
import { BentoDemo } from "./components/bentoGrid";


const SolutionSection = () => {
    return (
        <>
            <section className={styles.solutionSection}>
                <p className={styles.sectionLabel}>Solució</p>
                <h2 className={styles.title}>
                    Automatització en el control d&apos;assistència
                </h2>

                <BlurFade delay={0.25} inView>
                    <p className={styles.description}>
                        Facilita el control horari, redueix errors en el registre i optimitza l&apos;anàlisi
                        de dades de presència, permetent-te enfocar els recursos en la productivitat.
                    </p>
                </BlurFade>

                <BlurFade delay={0.25} inView>
                    <div className={styles.gridContainer}>
                        <BentoDemo />
                    </div>
                </BlurFade>
            </section>
        </>
    );
};

export default SolutionSection;
