import PropTypes from 'prop-types';
import { useState } from 'react';
import { dataObj } from '../../assets/constants/data';
import styles from './Tab.module.scss';

const Tab = ({ variant = 'primary' }) => {
  const [nav, setNav] = useState(0);
  return (
    <div className={`${styles.tab} ${variant}`}>
      <ul className={styles['tab-nav']}>
        {dataObj &&
          Array.isArray(dataObj) &&
          dataObj.map((item, idx) => (
            <li className={nav === idx ? styles.active : ''} onClick={() => setNav(idx)} key={idx}>
              {item.tabNav}
            </li>
          ))}
      </ul>
      <div className={styles['tab-content']}>{dataObj[nav].content}</div>
    </div>
  );
};

Tab.propTypes = {
  variant: PropTypes.string.isRequired,
};

export default Tab;
