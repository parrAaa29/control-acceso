import React from "react";
import styles from "./aboutSection.module.css";
import Navbar from "@/app/(home)/components/heroSection/components/navbar";
import CardAbout from "./components/cardAbout";
import BlurFade from "@/components/ui/blur-fade";

const AboutSection = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.aboutContent}>
                <section className={styles.aboutSection}>
                <BlurFade delay={0.75} inView>
                    <p className={styles.aboutLabel}>NOSTRA MISSIÓ</p>
                    <h2 className={styles.title}>
                        Oferim el millor sistema de control horari i de presència
                    </h2>
                    <p className={styles.description}>
                        Som una empresa dedicada a facilitar un control de presència integral, amb solucions que 
                        garanteixen la gestió horària en temps real, incidències, i informes detallats. El nostre sistema ID Presence, amb 
                        interfície intuïtiva i múltiples mètodes d’identificació (targetes magnètiques, proximitat, empremta digital, 
                        reconeixement facial), s&apos;adapta a les necessitats de les empreses amb seu única o diverses.
                    </p>
                </BlurFade>
                </section>

                <div className={styles.cardAboutContainer}>
                    <CardAbout />
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
