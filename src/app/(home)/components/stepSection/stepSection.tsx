"use client";

import React, { useState, useEffect } from 'react';
import styles from './stepSection.module.css';
import BlurFade from '@/components/ui/blur-fade';
import { FaUpload, FaRocket, FaStar, FaHandshake, FaLightbulb } from 'react-icons/fa';
import Image from 'next/image';

const steps = [
    {
        title: "1. Upload Your Data",
        description: "Simply upload your data to our secure platform. We support various file formats and data types to ensure seamless integration with your existing systems.",
        icon: <FaUpload />,
        image: '/img/imagen-prueba-psa-1.png',
    },
    {
        title: "2. Click Start",
        description: "Our advanced AI algorithms automatically process and analyze your data, extracting valuable insights and patterns that would be difficult to identify manually.",
        icon: <FaRocket />,
        image: '/img/imagen-prueba-psa-2.png',
    },
    {
        title: "3. Get Actionable Insights",
        description: "Receive clear, actionable insights and recommendations based on the AI analysis. Use these insights to make data-driven decisions and improve your business strategies.",
        icon: <FaStar />,
        image: '/img/imagen-prueba-psa-3.png',
    },
    {
        title: "4. Collaborate with Teams",
        description: "Engage with your teams through collaborative tools and features that enhance productivity and communication.",
        icon: <FaHandshake />,
        image: '/img/imagen-prueba-psa-4.png',
    },
    {
        title: "5. Implement Changes",
        description: "Utilize the insights gathered to implement effective changes within your organization and track their impact.",
        icon: <FaLightbulb />,
        image: '/img/imagen-prueba-psa-5.png',
    }
];

const StepsSection = () => {
    const [progress, setProgress] = useState([0, 0, 0]);
    const [currentImage, setCurrentImage] = useState(steps[0].image);
    const [currentStepSet, setCurrentStepSet] = useState(0);

    useEffect(() => {
        const timers = progress.map((_, index) => {
            if (index === 0 || progress[index - 1] === 100) {
                return setInterval(() => {
                    setProgress((prevProgress) => {
                        const newProgress = [...prevProgress];
                        if (newProgress[index] < 100) {
                            newProgress[index] += 1;

                            if (newProgress[index] === 100 && index < steps.length - 1) {
                                setCurrentImage(steps[index + 1].image);
                            }
                        }
                        return newProgress;
                    });
                }, 100); // Ajusta la velocidad de la barra de progreso
            }
            return null;
        });

        if (progress.every(p => p === 100)) {
            if (currentStepSet === 0) {
                setCurrentStepSet(1);
                setProgress([0, 0]);
                setCurrentImage(steps[3].image);
            } else {
                setCurrentStepSet(0);
                setProgress([0, 0, 0]);
                setCurrentImage(steps[0].image);
            }
        }

        return () => timers.forEach((timer) => timer && clearInterval(timer));
    }, [progress, currentStepSet]);

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
                <div className={styles.textContainer}>
                    {(currentStepSet === 0 ? steps.slice(0, 3) : steps.slice(3, 5)).map((step, index) => (
                        <BlurFade delay={0.5} inView key={index} className={styles.blurFade}>
                            <div className={styles.step}>
                                <div className={styles.progressBar}>
                                    <div className={styles.progress} style={{ width: `${progress[index % 3]}%` }} />
                                </div>
                                <div className={styles.paragraph}>
                                    <div className={styles.icon}>{step.icon}</div>
                                    <div className={styles.stepData}>
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                </div>
                <div className={styles.imageContainer}>
                    <BlurFade delay={0.5} inView>
                        <Image src={currentImage} alt="Current Step Image" width={500} height={500} />
                    </BlurFade>
                </div>
            </div>
        </section>
    );
};

export default StepsSection;
