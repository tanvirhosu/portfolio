import { useState } from 'react';
import type { Content, StyleType } from '../../types/types';
import TabContent from './TabContent';
import Tabs from './Tabs';
import styles from './styles.module.css';

interface TabsWithContentProps {
  data: Content[];
  style: StyleType;
}

export default function TabsWithContent({ data, style }: TabsWithContentProps) {
  const activeData = data.filter((e) => e.active).sort((a, b) => b.id - a.id);
  if (!activeData.length) return null;

  const tabs = activeData.map((e) => e.name);
  const [content, updateContent] = useState(activeData[0]);

  const handleUpdateContent = (tabId: number) => {
    updateContent(activeData[tabId]);
  };

  return (
    <div className={styles.root}>
      <Tabs names={tabs} onTabClick={handleUpdateContent} />
      <TabContent content={content} style={style} />
    </div>
  );
}
