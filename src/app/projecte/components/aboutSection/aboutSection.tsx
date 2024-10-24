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
                    <p className={styles.aboutLabel}>OUR MISSION</p>
                    <h2 className={styles.title}>
                        Our mission is to provide the best service to our customers
                    </h2>
                    <p className={styles.description}>
                        We are a company that is dedicated to providing the best service to our customers. We have a team of professionals who are always ready to help you with any questions you may have.
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