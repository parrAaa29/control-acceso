import React from 'react';
import styles from './problemSection.module.css';
import { FaClock, FaNetworkWired, FaUserShield } from 'react-icons/fa';
import BlurFade from '@/components/ui/blur-fade';

const ProblemSection = () => {
    return (
        <>
            <section className={styles.problemSection}>
                <p className={styles.problemLabel}>PROBLEMES</p>
                <h2 className={styles.title}>
                    Control d&apos;assistència sense automatització
                </h2>
                <div className={styles.problems}>
                    <BlurFade delay={0.5} inView>
                        <div className={styles.problem}>
                            <div className={styles.icon}>
                                <FaClock />
                            </div>
                            <h3>Registre Manual d&apos;Horaris</h3>
                            <p>
                                Les empreses enfronten dificultats en gestionar manualment els horaris d&apos;entrada,
                                sortida i absències dels empleats, la qual cosa resulta en errors i pèrdua de temps.
                            </p>
                        </div>
                    </BlurFade>
                    <BlurFade delay={0.75} inView>
                        <div className={styles.problem}>
                            <div className={styles.icon}>
                                <FaNetworkWired />
                            </div>
                            <h3>Connexió i Sincronització Complexa</h3>
                            <p>
                                Sense un sistema centralitzat, és complicat sincronitzar les dades de diversos dispositius,
                                el que limita la capacitat d&apos;obtenir una vista en temps real de l&apos;assistència del personal.
                            </p>
                        </div>
                    </BlurFade>
                    <BlurFade delay={1.0} inView>
                        <div className={styles.problem}>
                            <div className={styles.icon}>
                                <FaUserShield />
                            </div>
                            <h3>Manca de Seguretat en els Accessos</h3>
                            <p>
                                La falta d&apos;un sistema segur d&apos;identificació i control d&apos;accés augmenta l&apos;exposició a riscos
                                de seguretat a les instal·lacions, afectant la protecció de dades i accessos.
                            </p>
                        </div>
                    </BlurFade>
                </div>
            </section>
        </>
    );
};

export default ProblemSection;
