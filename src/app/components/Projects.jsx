import { useState } from 'react';
import GalleryModal from './GalleryModal';
import styles from './Projects.module.css'

const Projects = ({projects}) => {
    const [openProject, setOpenProject] = useState(null);
    return (
        <>
        <div className={styles.ProjectsContainer}>
            {projects.map((project, idx) => (
                <div
                    className={styles.ProjectCard}
                    key={idx}
                    onClick={() => setOpenProject(project)}
                    style={{ cursor: 'pointer' }}
                >
                    <img
                        src={project.mainImage}
                        alt={project.title}
                        className={styles.ProjectImage}
                    />
                    <div className={styles.ProjectContent}>
                        <div className={styles.ProjectTitleTags}>
                            <span className={styles.ProjectTitle}>{project.title}</span>
                            <div className={styles.ProjectTags}>
                                {project.tags.map((tag, i) => (
                                    <span className={styles.ProjectTag} key={i}>{tag}</span>
                                ))}
                            </div>
                        </div>
                        {/* Optionally add description or other info here */}
                    </div>
                </div>
            ))}
        </div>
        {openProject && (
            <GalleryModal project={openProject} onClose={() => setOpenProject(null)} />
        )}
        </>
    )
}

export default Projects;