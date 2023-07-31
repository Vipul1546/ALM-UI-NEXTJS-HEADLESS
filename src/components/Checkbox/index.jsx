import styles from './checkbox.module.scss';

const Checkbox = ({ id, label }) => {
  return (
    <label className={styles.checkbox} for={id}>
      <input type="checkbox" id={id} />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
