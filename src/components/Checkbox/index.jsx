import { useEffect, useState } from 'react';
import styles from './checkbox.module.scss';

const Checkbox = ({ id, label, checked = false, checkHandler }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = e => {
    setIsChecked(!isChecked);
    checkHandler(e);
  };

  return (
    <label className={styles.checkbox}>
      <input type="checkbox" id={id} checked={isChecked} onChange={e => handleChange(e)} />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
