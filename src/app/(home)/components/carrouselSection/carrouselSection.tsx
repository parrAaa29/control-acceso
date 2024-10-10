import React from 'react';
import styles from './carrouselSection.module.css';  // Importar los estilos
import { FaBrain, FaBolt, FaShieldAlt } from 'react-icons/fa';


const CarrouselSection = () => {
    return (
        <>
            <section className={styles.problemSection}>
                <p className={styles.problemLabel}>PROBLEM</p>
                <h2 className={styles.title}>Manually entering your data is a hassle.</h2>
                <div className={styles.problems}>
                    <div className={styles.problem}>
                        <div className={styles.icon}>
                            <FaBrain />
                        </div>
                        <h3>Data Overload</h3>
                        <p>Businesses struggle to make sense of vast amounts of complex data, missing out on valuable insights that could drive growth and innovation.</p>
                    </div>
                    <div className={styles.problem}>
                        <div className={styles.icon}>
                            <FaBolt />
                        </div>
                        <h3>Slow Decision-Making</h3>
                        <p>Traditional data processing methods are too slow, causing businesses to lag behind market changes and miss crucial opportunities.</p>
                    </div>
                    <div className={styles.problem}>
                        <div className={styles.icon}>
                            <FaShieldAlt />
                        </div>
                        <h3>Data Security Concerns</h3>
                        <p>With increasing cyber threats, businesses worry about the safety of their sensitive information when adopting new technologies.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CarrouselSection;
