import React from 'react';
import styles from './carrouselSection.module.css';  // Importar los estilos

const CarrouselSection = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>COMPUTE SAVER</h2>
                    <h1 className={styles.title}>
                        REVOLUTIONIZE AWS COMPUTE EFFICIENCY
                    </h1>
                    <p className={styles.description}>
                        Experience the first and only AWS compute optimization solution fully powered by AWS Savings Plans. Save up to 50% on your AWS compute costs with no instance limitations, no reliance on the RI marketplace, and the flexibility to use any AWS compute products globally.
                    </p>
                </div>
            </section>
        </>
    );
};

export default CarrouselSection;
