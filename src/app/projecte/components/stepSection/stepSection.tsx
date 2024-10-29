"use client";

import React, { useState, useEffect, useRef } from 'react';
import styles from './stepSection.module.css';
import BlurFade from '@/components/ui/blur-fade';
import { FaClock, FaCalendarAlt, FaChartBar, FaUsers, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

const steps = [
    {
        title: "1. Configura els Terminals",
        description: "Instal·la i configura els terminals de control per registrar la presència amb tecnologies com RFID, empremta digital o reconeixement facial.",
        icon: <FaClock />,
        image: '/img/step/imagen-prueba-psa-1.png',
    },
    {
        title: "2. Defineix Horaris i Jornades",
        description: "Estableix franges horàries, toleràncies d'entrada/sortida i diferents tipus de jornades laborals per als teus empleats.",
        icon: <FaCalendarAlt />,
        image: '/img/step/imagen-prueba-psa-2.png',
    },
    {
        title: "3. Obten Informes en Temps Real",
        description: "Genera informes detallats de presència, absències i hores extres per analitzar el rendiment laboral de manera precisa.",
        icon: <FaChartBar />,
        image: '/img/step/imagen-prueba-psa-3.png',
    },
    {
        title: "4. Col·labora amb l'Equip",
        description: "Comparteix els informes i les mètriques d'assistència amb els teus equips per fomentar la transparència i millorar la comunicació.",
        icon: <FaUsers />,
        image: '/img/step/imagen-prueba-psa-4.png',
    },
    {
        title: "5. Aplica Millores Contínues",
        description: "Utilitza les dades d'assistència per ajustar horaris i optimitzar la productivitat a tota l'organització.",
        icon: <FaCheckCircle />,
        image: '/img/step/imagen-prueba-psa-5.png',
    }
];

const StepsSection = () => {
    const [progress, setProgress] = useState([0, 0, 0]);
    const [currentImage, setCurrentImage] = useState(steps[0].image);
    const [currentStepSet, setCurrentStepSet] = useState(0);
    const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (!isAnimationCompleted) return;

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
                }, 50);
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
    }, [progress, currentStepSet, isAnimationCompleted]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsAnimationCompleted(true);
                observer.disconnect();
            }
        }, { threshold: 0.5 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section className={styles.stepSection} ref={sectionRef}>
            <p className={styles.stepLabel}>COM FUNCIONA</p>
            <h2 className={styles.title}>
                Només 3 passos per començar
            </h2>

            <div className={styles.stepContent}>
                <div className={styles.textContainer}>
                    <BlurFade delay={0.25} inView className={styles.blurFade}>
                        {(currentStepSet === 0 ? steps.slice(0, 3) : steps.slice(3, 5)).map((step, index) => (
                            <div className={styles.step} key={index}>
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
                        ))}
                    </BlurFade>
                </div>
                <div className={styles.imageContainer}>
                    <BlurFade delay={0.25} inView>
                        <Image src={currentImage} alt="Imatge del pas actual" width={500} height={500} />
                    </BlurFade>
                </div>
            </div>
        </section>
    );
};

export default StepsSection;
