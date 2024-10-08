import React from 'react';
import styles from './accessControl.module.css';
import Card from './card.jsx';

const AccessControl = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.logo}>e</p>
        <p className={styles.navTitle}>Enttia | Control d&apos;Access</p>
        <nav className={styles.nav}>
          <a href="#">About Us</a>
          <a href="#">Contacto</a>
        </nav>
      </div>

      <div className={styles.overlay}></div>

      <div className={styles.textContainer}>
        <h1>Gestiona accessos de forma segura i eficient</h1>
        <p>
          Permite controlar la entrada y salida del personal autorizado en diferentes zonas y en tiempo real.
        </p>
      </div>

      <div className={styles.cardContainer}>
        <Card />
      </div>
    </div>
  );
};

export default AccessControl;
