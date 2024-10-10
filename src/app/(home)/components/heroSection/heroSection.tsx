import React from 'react';
import styles from './heroSection.module.css';
import Card from '../../../../components/layout/card.jsx';
import WordPullUp from '@/components/ui/word-pull-up';
import { FadeText } from '@/components/ui/fade-text';

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <FadeText
            className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem] text-left"
            direction="down"
            framerProps={{
              show: { transition: { delay: 0.6 } },
            }}
            text="e"
          />
        </div>
        <div className={styles.navTitle}>
          <FadeText
            className="text-4xl tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem] text-left"
            direction="down"
            framerProps={{
              show: { transition: { delay: 0.6 } },
            }}
            text="Enttia | Control d'Access"
          />
        </div>
        <nav className={styles.nav}>
          <FadeText
            className="text-4xl tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem] text-left"
            direction="down"
            framerProps={{
              show: { transition: { delay: 0.6 } },
            }}
            text="About Us"
          />

          <FadeText
            className="text-4xl tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem] text-left"
            direction="down"
            framerProps={{
              show: { transition: { delay: 0.6 } },
            }}
            text="Contacto"
          />
        </nav>
      </div>

      <div className={styles.overlay}></div>

      <div className={styles.textContainer}>
        <WordPullUp
          className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem] text-left"
          words="Gestiona accessos de forma segura i eficient"
        />
        <div className={styles.subText}>
          <FadeText
            className="text-lg tracking-[0em] text-black md:text-lg md:leading-[1.5rem] text-left"
            direction="left"
            framerProps={{
              show: { transition: { delay: 0.8 } },
            }}
            text="Permite controlar la entrada y salida del personal autorizado en diferentes zonas y en tiempo real."
          />
        </div>
      </div>

      <div className={styles.cardContainer}>
        <Card />
      </div>

    </div>
  );
};

export default HeroSection;
