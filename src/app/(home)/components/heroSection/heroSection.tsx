import React from 'react';
import styles from './heroSection.module.css';
import WordPullUp from '@/components/ui/word-pull-up';
import { FadeText } from '@/components/ui/fade-text';
import dynamic from 'next/dynamic';
import Navbar from './components/navbar';

const Card = dynamic(() => import('@/app/(home)/components/heroSection/components/card'), {
    ssr: false,
});

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <Navbar />

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
