import BlurFade from '@/components/ui/blur-fade';
import styles from './projectSection.module.css';
import Projects from './components/projects';

const ProjectsSection = () => {
    return (
        <div className="p-8 flex items-center flex-col">
            <section id="projects" className={styles.projectSection}>
                <p className={styles.projectLabel}>PROJECTES</p>
                <h2 className={styles.title}>
                    Projectes que mostren seguretat
                </h2>
            </section>

            <BlurFade delay={0.5} inView className='w-full'>
                <Projects />
            </BlurFade>
        </div>
    );
};

export default ProjectsSection;
