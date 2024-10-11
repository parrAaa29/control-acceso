import React from 'react';
import styles from './heroSection.module.css';
import Card from '../../../../components/layout/card.jsx';
import WordPullUp from '@/components/ui/word-pull-up';
import { FadeText } from '@/components/ui/fade-text';
import { PhoneIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.header} flex items-center justify-center`}>
        <div className={`${styles.logo} flex-1 text-center`}>
          <FadeText
            className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
            direction="down"
            framerProps={{
              show: { transition: { delay: 0.6 } },
            }}
            text="e"
          />
        </div>
        <div className={`${styles.navTitle} flex-1 text-center`}>
          <FadeText
            className="text-4xl tracking-[0em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
            direction="down"
            framerProps={{
              show: { transition: { delay: 0.6 } },
            }}
            text="Enttia | Control d'Access"
          />
        </div>
        <nav className={`flex space-x-4 flex-1 text-center justify-end`}>
          <Link href="#/">
            <FadeText
              className="px-4 py-2 border border-gray-300 rounded-lg text-black bg-white hover:bg-gray-100 flex items-center cursor-pointer"
              direction="down"
              framerProps={{
                show: { transition: { delay: 0.6 } },
              }}
              text="About Us"
            />
          </Link>

          <Link href="#/">
            <FadeText
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 flex items-center space-x-2 cursor-pointer"
              direction="down"
              framerProps={{
                show: { transition: { delay: 0.6 } },
              }}
              icon={
                <PhoneIcon className="h-5 w-5 mr-2" aria-hidden="true" />
              }
              text="Contacte"
            />
          </Link>
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
