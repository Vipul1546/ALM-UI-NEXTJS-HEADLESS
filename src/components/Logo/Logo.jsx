import styles from './logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src="https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg" alt="Logo Adobe" />
      <span className={styles['logo-text--default']}>Adobe</span>
    </div>
  );
};

export default Logo;
