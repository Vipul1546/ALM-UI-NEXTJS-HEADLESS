import styles from './Grid.module.scss';
const Grid = () => {
  return (
    <div className={styles['example-container']}>
      <div className={styles['example-row']}>
        <div className={styles['example-content-main']}>Main content</div>
        <div className={styles['example-content-secondary']}>Secondary content</div>
      </div>
    </div>
  );
};
export default Grid;
