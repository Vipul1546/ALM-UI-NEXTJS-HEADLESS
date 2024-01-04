'use client';

import IconGrid from '@/assets/icons/IconGrid';
import IconList from '@/assets/icons/IconList';
import { useState } from 'react';
import styles from './switchView.module.scss';

const SwitchView = ({ handleToggleClick }) => {
  const [activeView, setactiveView] = useState('grid');
  const handleClick = type => {
    setactiveView(type);
    handleToggleClick(type);
  };
  return (
    <ul className={styles.toggleview}>
      <li>View As:</li>
      <li className={activeView == 'list' ? styles.active : ''} onClick={() => handleClick('list')}>
        <IconList />
      </li>
      <li className={activeView == 'grid' ? styles.active : ''} onClick={() => handleClick('grid')}>
        <IconGrid />
      </li>
    </ul>
  );
};

export default SwitchView;
