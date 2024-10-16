import BlurFade from '@/components/ui/blur-fade';
import React from 'react';
import styles from './projectSection.module.css';
import NewsCard from './components/projectCard';
import image1 from '../../../../../public/img/project/project-img-1.jpg';
import image2 from '../../../../../public/img/project/project-img-2.jpg';
import image3 from '../../../../../public/img/project/project-img-3.jpg';

const LatestProjects = () => {

    return (
        <>
            <section className={styles.projectSection}>
                <BlurFade delay={0.25} inView>
                    <p className={styles.projectLabel}>LASTEST PROJECTS</p>
                </BlurFade>
                <h2 className={styles.title}>
                    <BlurFade delay={0.25} inView>
                        Check out our latest projects
                    </BlurFade>
                </h2>
                <div className="flex justify-center items-center gap-20">
                    <NewsCard
                        date="Agost 29, 2024"
                        title="Seu de la Generalitat de Girona"
                        description="Nova implementació de control d'accessos amb panys intel·ligents"
                        imageUrl={image1}
                        linkUrl= "/project"
                    />
                    <NewsCard
                        date="Gener 2, 2023"
                        title="Palau Marc de la Generalitat"
                        description="Instal·lació de control d'accessos amb panys intel·ligents"
                        imageUrl={image2}
                        linkUrl= "/project"
                    />
                    <NewsCard
                        date="Agost 29, 2024"
                        title="Institut Nacional d’Educació Física de Catalunya"
                        description="Instal·lació de sistema de videovigilancia"
                        imageUrl={image3}
                        linkUrl= "/project"
                    />
                </div>
            </section>
        </>
    );
};

export default LatestProjects;
