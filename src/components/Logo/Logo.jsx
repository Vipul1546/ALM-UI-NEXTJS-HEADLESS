'use client';
import { useAlmContext } from '@/context';
import styles from './logo.module.scss';

const Logo = () => {
  const { isWhiteLogo } = useAlmContext();
  return (
    <div className={styles.logo}>
      <img src={isWhiteLogo ? '/logo/Wonder_white.png' : '/logo/Wonder_black.png'} alt="Logo Wonder Beauty" />
    </div>
  );
};

export default Logo;
