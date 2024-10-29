import React from 'react';
import styles from './projectSection.module.css';
import NewsCard from './components/projectCard';
import image1 from '../../../../../public/img/project/project-img-1.jpg';
import image2 from '../../../../../public/img/project/project-img-2.jpg';
import image3 from '../../../../../public/img/project/project-img-3.jpg';
import BlurFade from '@/components/ui/blur-fade';

const LatestProjects = () => {

    return (
        <>
            <section className={styles.projectSection}>
                    <p className={styles.projectLabel}>PROJECTES DESTACATS</p>
                <h2 className={styles.title}>
                    Nostres projectes més destacats
                </h2>
                <BlurFade delay={0.5} inView>
                <div className="flex justify-center items-center gap-20">
                    <NewsCard
                        date="Agost 29, 2024"
                        title="Seu de la Generalitat de Girona"
                        description="Nova implementació de control d'accessos amb panys intel·ligents"
                        imageUrl={image1}
                        linkUrl= "/projecte"
                    />
                    <NewsCard
                        date="Gener 2, 2023"
                        title="Palau Marc de la Generalitat"
                        description="Instal·lació de control d'accessos amb panys intel·ligents"
                        imageUrl={image2}
                        linkUrl= "/projecte"
                    />
                    <NewsCard
                        date="Agost 29, 2024"
                        title="Institut Nacional d’Educació Física de Catalunya"
                        description="Instal·lació de sistema de videovigilancia"
                        imageUrl={image3}
                        linkUrl= "/projecte"
                        knowMore={true}
                    />
                </div>
                </BlurFade>
            </section>
        </>
    );
};

export default LatestProjects;
