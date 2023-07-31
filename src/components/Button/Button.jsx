import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ variant = 'primary', children }) => (
  <button type="button" className={`${styles.button} ${variant}`}>
    {children}
  </button>
);

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Button;
