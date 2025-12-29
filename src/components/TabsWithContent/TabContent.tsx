import { type FC } from 'react';
import { ArrowIcon } from '../../assets/svg/ArrowIcon';
import type { Content, StyleType } from '../../types/types';
import styles from './styles.module.css';

interface TabContentProps {
  content: Content;
  style: StyleType;
}

const TabContent: FC<TabContentProps> = ({ content, style }) => {
  const { img, link } = content;
  const { title, subtitle, info, extraInfo, summary, details, features } =
    content.content;

  return (
    <div className={`${styles.content} ${styles[style]}`}>
      <div className={styles.headline}>
        <img className={styles.img} src={img} alt="Logo" />
        <p>{subtitle}</p>
        <p>{info}</p>
        {extraInfo && <p>{extraInfo}</p>}
      </div>
      <div className={styles.divider} />
      <div className={styles.body}>
        <a
          aria-label="Content title"
          className={styles.title}
          href={link}
          target="_blank"
        >
          {title}
          <ArrowIcon />
        </a>
        <ul>
          {summary.map((text, id) => (
            <li key={id} className={styles.summary}>
              {text}
            </li>
          ))}
        </ul>
        <ul>
          {details.map((text, id) => (
            <li key={id} className={styles.detail}>
              {text}
            </li>
          ))}
        </ul>
        <ul className={styles.features}>
          {features.map((text, id) => (
            <li key={id} className={styles.feature}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabContent;
