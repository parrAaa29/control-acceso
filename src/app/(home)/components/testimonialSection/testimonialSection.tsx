import React from "react";
import styles from "./testimonialSection.module.css";
import BlurFade from "@/components/ui/blur-fade";
import { Testimonies } from "./components/testimonies";


const TestimonialSection = () => {
    return (
        <>
            <section id="testimonials" className={styles.testimonialSection}>
                <p className={styles.testimonialLabel}>
                    Testimonis
                </p>
                <h2 className={styles.title}>
                    Clients que confien en nosaltres
                </h2>

                <BlurFade delay={0.25} inView>
                    <Testimonies />
                </BlurFade>
            </section>
        </>
    );
}

export default TestimonialSection;