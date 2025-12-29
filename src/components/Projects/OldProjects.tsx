import { type FC } from 'react';
import { ExternalLinkIcon } from '../../assets/svg/ExternalLinkIcon';
import data from '../../data/projects/old-projects.json';
import type { OldProject } from '../../types/types';
import styles from './styles.module.css';

const OldProjects: FC = () => {
  const projects = (data as OldProject[])
    .filter((e) => e.active)
    .sort((a, b) => b.id - a.id);

  return (
    <div className={styles.featuredProjects}>
      <h4>Other featured projects</h4>
      <ul>
        {projects.map(
          ({ id, link, logo, demo, title, description, features }) => (
            <li key={id}>
              <article className={styles.featuredProject}>
                <div className={styles.fpHeadline}>
                  <img src={logo} alt="Logo" />
                  {demo && (
                    <a aria-label="External link" href={demo} target="_blank">
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
                <a
                  aria-label="Project name"
                  className={styles.fpTitle}
                  href={link}
                  target="_blank"
                >
                  {title}
                </a>
                <p className={styles.fpDescription}>{description}</p>
                <ul className={styles.features}>
                  {features.map((text, index) => (
                    <li key={index} className={styles.feature}>
                      {text}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default OldProjects;
