import React from 'react';
import styles from './stepSection.module.css';
import BlurFade from '@/components/ui/blur-fade';
import { FaUpload, FaRocket, FaStar } from 'react-icons/fa'; // Importar íconos de FontAwesome
import Image from 'next/image';

const StepsSection = () => {
    return (
        <section className={styles.stepSection}>
            <BlurFade delay={0.25} inView>
                <p className={styles.stepLabel}>HOW IT WORKS</p>
            </BlurFade>
            <h2 className={styles.title}>
                <BlurFade delay={0.25} inView>
                    Just 3 steps to get started
                </BlurFade>
            </h2>

            <div className={styles.stepContent}>
                <div className={styles.steps}>
                    <BlurFade delay={0.5} inView>
                        <div className={styles.step}>
                            <div className={styles.icon}>
                                <FaUpload />
                            </div>
                            <div className={styles.stepData}>
                                <h3>1. Upload Your Data</h3>
                                <p>
                                    Simply upload your data to our secure platform. We support various file formats and data types to ensure seamless integration with your existing systems.
                                </p>
                            </div>
                        </div>
                    </BlurFade>

                    <BlurFade delay={0.75} inView>
                        <div className={styles.step}>
                            <div className={styles.icon}>
                                <FaRocket />
                            </div>
                            <div className={styles.stepData}>
                                <h3>2. Click Start</h3>
                                <p>
                                    Our advanced AI algorithms automatically process and analyze your data, extracting valuable insights and patterns that would be difficult to identify manually.
                                </p>
                            </div>
                        </div>
                    </BlurFade>

                    <BlurFade delay={1} inView>
                        <div className={styles.step}>
                            <div className={styles.icon}>
                                <FaStar />
                            </div>
                            <div className={styles.stepData}>
                                <h3>3. Get Actionable Insights</h3>
                                <p>
                                    Receive clear, actionable insights and recommendations based on the AI analysis. Use these insights to make data-driven decisions and improve your business strategies.
                                </p>
                            </div>
                        </div>
                    </BlurFade>

                    {/*
                    <BlurFade delay={1.25} inView>
                        <div className={styles.step}>
                            <div className={styles.icon}>
                                <FaStar />
                            </div>
                            <div className={styles.stepData}>
                                <h3>4. Get Actionable Insights</h3>
                                <p>
                                    Receive clear, actionable insights and recommendations based on the AI analysis. Use these insights to make data-driven decisions and improve your business strategies.
                                </p>
                            </div>
                        </div>
                    </BlurFade>

                    <BlurFade delay={1.5} inView>
                        <div className={styles.step}>
                            <div className={styles.icon}>
                                <FaStar />
                            </div>
                            <div className={styles.stepData}>
                                <h3>5. Get Actionable Insights</h3>
                                <p>
                                    Receive clear, actionable insights and recommendations based on the AI analysis. Use these insights to make data-driven decisions and improve your business strategies.
                                </p>
                            </div>
                        </div>
                    </BlurFade>
                    */}
                </div>

                <div className={styles.imageContainer}>
                    <Image src="/images/step-section.png" alt="Step Section" width={500} height={500} />
                </div>
            </div>
        </section>
    );
};

export default StepsSection;
