import { useState, type FC } from 'react';
import styles from './styles.module.css';

interface TabsProps {
  names: string[];
  onTabClick(id: number): void;
}

const Tabs: FC<TabsProps> = ({ names, onTabClick }) => {
  const [selectedTabId, setSelectedTabId] = useState(0);

  const handleTabClick = (tabId: number) => {
    setSelectedTabId(tabId);
    onTabClick(tabId);
  };

  return (
    <ul className={styles.tabs}>
      {names.map((name, id) => (
        <li key={id}>
          <button
            className={`${styles.tab} ${
              id === selectedTabId ? styles.isSelected : ''
            }`}
            onClick={() => handleTabClick(id)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
